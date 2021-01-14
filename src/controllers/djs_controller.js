const { pick } = require("lodash");
const { v4: uuidv4 } = require('uuid');
const now = new Date();
const { Op } = require("sequelize");

const { Dj, Musicalgenre, DjMusicalgenre, Club } = require("./../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
	getAllDjs: async () => {
		const getAllDjs = await Dj.findAll({
			attributes: { exclude: ["club_id", "created_at", "updated_at"] },
			include: [
				{ model: Club, attributes: ["name"] },
				{ model: Musicalgenre, attributes: ["name"], through: { attributes: [/* "dj_id", "musicalgenre_id" */] } }
			],
			order: [["name", "DESC"]]
		});
		return getAllDjs;
	},

	getDj: async (nameDj) => {
		const getOneDj = await Dj.findOne({
			where: { name: nameDj },
			attributes: { exclude: ["club_id", "created_at", "updated_at"] },
			include: [
				{ model: Club },
				{ model: Musicalgenre }
			]
		});
		if (!getOneDj) {
			throw new NotFoundError("Ressource introuvable", "Ce Dj n'exixte pas !")
		}
		return getOneDj;
	},

	addDj: async (dataDj) => {
		/* Get the club's id */
		const club = await Club.findOne({
			where: { name: dataDj.club }
		});
		if (!club) throw new NotFoundError("Ressource introuvable", "Ce club n'est pas encore enregistré !");
		dataDj.club_id = club.id;
		/* Check if the dj musical genres exists in the db */
		const foundDjMusicalGenres = await Musicalgenre.findAll({
			attributes: ["name", "id"],
			where: { name: dataDj.musical_genres }
		});
		const foundDjMusicalGenresArray = [];
		for (let i = 0; i < foundDjMusicalGenres.length; i++) {
			foundDjMusicalGenresArray.push(foundDjMusicalGenres[i].name);
		}
		dataDj.musical_genres.map(djMusicalGenre => {
			if (!foundDjMusicalGenresArray.includes(djMusicalGenre)) {
				throw new NotFoundError("Ressource introuvable", `${djMusicalGenre} est un style de musique non encore enregistré !`);
			}
		});
		/* If the dj does not exist in the db, create the dj */
		const dj = await Dj.findOne({
			where: { name: dataDj.name },
		});
		if (dj) throw new NotFoundError("Ressource existante", "Ce Dj existe déjà !");
		const addOneDj = await Dj.create(dataDj);
		/* Insert the dj musical genres in the through table */
		const addToDjMusicalgenre = [];
		for (let i = 0; i < foundDjMusicalGenres.length; i++) {
			addToDjMusicalgenre.push({ musicalgenre_id: foundDjMusicalGenres[i].id, dj_id: dataDj.id });
		}
		await DjMusicalgenre.bulkCreate(addToDjMusicalgenre);

		return addOneDj;
	},

	updateDj: async (nameDj, dataDj) => {
		/* Is the Dj to update exists in the db */
		const foundDj = await Dj.findOne({
			attributes: { exclude: ["club_id", "created_at", "updated_at"] },
			where: { name: nameDj },
			include: [
				{ model: Club },
				{ model: Musicalgenre, through: { attributes: [] } }
			]
		});
		if (!foundDj) throw new NotFoundError("Ressources introuvable", "Ce Dj n'existe pas !");
		// console.log("=================>",foundDj.dataValues.Club.name);
		/* Check if the club has changed. If so get the new club id */
		const club = await Club.findOne({
			where: { name: dataDj.club }
		});
		if (!club) throw new NotFoundError("Ressource introuvable", "Ce club n'est pas encore enregistré !");
		if (foundDj.dataValues.Club.name !== dataDj.club) dataDj.club_id = club.id;
		// /* Update Dj */
		// const updateDj = await Dj.update(
		// 	dataDj,
		// 	{ where: { name: nameDj } }
		// )
		// return updateDj;
	},

	deleteDj: async (nameDj) => {
		const deleteOneDj = await Dj.findOne({
			where: { name: nameDj }
		});
		if (!deleteOneDj) {
			throw new NotFoundError("Ressources introuvable", "Ce Dj n'existe pas !")
		}
		await Dj.destroy({
			where: { name: nameDj }
		});
		return null;
	},
};

module.exports = djsController;
