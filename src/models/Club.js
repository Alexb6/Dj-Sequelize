'use strict';
const {
	Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Club extends Model {
		static associate(models) {
			this.hasMany(models.Dj, { foreignKey: 'club_id' });
		}
	};
	Club.init({
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,			
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
		modelName: 'Club',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});
	return Club;
};