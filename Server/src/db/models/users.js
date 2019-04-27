/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		uuid: {
			type: DataTypes.STRING(36),
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		firstname: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
