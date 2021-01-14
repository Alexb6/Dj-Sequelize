'use strict';
const djsMusicalGenres = require('./../seeds/20210102162819-djs-musical_genres');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('DjMusicalgenres', djsMusicalGenres, {});
	},
	
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('DjMusicalgenres', null, {});
	}
};
