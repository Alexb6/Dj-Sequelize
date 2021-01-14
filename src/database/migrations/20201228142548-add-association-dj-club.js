'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('Djs', 'club_id', {
			type: Sequelize.UUID,
			references: {
				model: 'Clubs',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn('Djs', 'club_id');
	}
};
