'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await Promise.all([
			queryInterface.addColumn('DjMusicalgenres', 'dj_id', {
				type: Sequelize.UUID,
				references: {
					model: 'Djs',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			}),
			queryInterface.addColumn('DjMusicalgenres', 'musicalgenre_id', {
				type: Sequelize.UUID,
				references: {
					model: 'Musicalgenres',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			})
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await Promise.all([
			queryInterface.removeColumn('DjMusicalgenres', 'dj_id'),
			queryInterface.removeColumn('DjMusicalgenres', 'musicalgenre_id')
		]);
	}
};
