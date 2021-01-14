'use strict';
const djs = require('./../seeds/20210102120121-djs');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Djs', djs, {});
	},
	
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Djs', null, {});
	}
};
