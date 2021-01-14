'use strict';
const clubs = require('./../seeds/20210101173904-clubs');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Clubs', clubs, {});
	},
	
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Clubs', null, {});
	}
};
