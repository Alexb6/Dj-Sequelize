const { Musicalgenre } = require("../models");

const musicalGenresController = {
	getAllMusicalGenres: async () => {
		const getAllMusicalGenres = await  Musicalgenre.findAll({
			attributes: ["name", "id"]
		})
		return getAllMusicalGenres;
	},
};

module.exports = musicalGenresController;
