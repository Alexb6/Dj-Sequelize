'use strict';
const {
	Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Musicalgenre extends Model {
		static associate(models) {
			this.belongsToMany(models.Dj, {through: 'DjMusicalgenres', foreignKey: 'musicalgenre_id'});
		}
	};
	Musicalgenre.init({
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: Sequelize.UUIDV4,
			validate: {
				notNull: true,
				isUUID: 4
			}
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
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
		modelName: 'Musicalgenre',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});
	return Musicalgenre;
};