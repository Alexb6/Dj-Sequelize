'use strict';
const {
	Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class DjMusicalgenre extends Model {
		static associate(models) {
			this.belongsTo(models.Dj, { foreignKey: 'dj_id' });
			this.belongsTo(models.Musicalgenre, { foreignKey: 'musicalgenre_id' });
		}
	};
	DjMusicalgenre.init({
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			validate: {
				notNull: true,
				isUUID: 4
			}
		},
		dj_id: {
			allowNull: false,
			type: DataTypes.UUID
		},
		musicalgenre_id: {
			allowNull: false,
			type: DataTypes.UUID
		},
		created_at: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updated_at: {
			allowNull: false,
			type: DataTypes.DATE
		}
	}, {
		sequelize,
		modelName: 'DjMusicalgenre',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});
	return DjMusicalgenre;
};