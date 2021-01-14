'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Djs', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true				
			},
			url_name: {
				type: Sequelize.STRING(50),
				allowNull: false,
				unique: true
			},
			name: {
				type: Sequelize.STRING(50),
				allowNull: false,
				unique: true
			},
			biography: {
				type: Sequelize.STRING(2000)
			},
			soundcloud: {
				type: Sequelize.STRING(200)
			},
			facebook: {
				type: Sequelize.STRING(200)
			},
			instagram: {
				type: Sequelize.STRING(200)
			},
			spotify: {
				type: Sequelize.STRING(200)
			},
			beatport: {
				type: Sequelize.STRING(200)
			},
			mixcloud: {
				type: Sequelize.STRING(200)
			},
			youtube: {
				type: Sequelize.STRING(200)
			},			
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Djs');
	}
};