'use strict';
const musical_genres = require('./../seeds/20200901155256-musical_genres');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Musicalgenres', musical_genres, {});
	},
	
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Musicalgenres', null, {});
	}
};
