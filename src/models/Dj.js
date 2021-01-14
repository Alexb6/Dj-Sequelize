'use strict';
const {
	Model, Sequelize, ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Dj extends Model {
		static associate(models) {
			this.belongsTo(models.Club, { foreignKey: 'club_id' });
			this.belongsToMany(models.Musicalgenre, { through: 'DjMusicalgenres', foreignKey: 'dj_id' });
		}
	};
	Dj.init({
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
		url_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notNull: true,
				len: [3, 50]
			}
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notNull: true,
				len: [3, 50]
			}
		},
		biography: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [3, 2000]
			}
		},
		soundcloud: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 1000]
			}
		},
		facebook: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 1000]
			}
		},
		instagram: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 1000]
			}
		},
		spotify: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 1000]
			}
		},
		beatport: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 1000]
			}
		},
		mixcloud: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 1000]
			}
		},
		youtube: {
			type: DataTypes.STRING,
			validate: {
				len: [3, 1000]
			}
		},
		club_id: {
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
		modelName: 'Dj',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});
	return Dj;
};