/* jshint indent: 1 */
const bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('User', {
		UserId: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		UserName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
		},
		Password: {
			type: DataTypes.STRING(70),
			allowNull: false
		},
		FirstName: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		LastName: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		Email: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
		},
		RoleId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
			tableName: 'User',
			timestamps: false,
			hooks: {
				beforeSave: (user) => {
					console.log('beforeSave')
					return bcrypt
						.hash(user.Password, bcrypt.genSaltSync(10))
						.then(hash => { user.Password = hash; user.Role = 1});
				},
			}
		});
};
