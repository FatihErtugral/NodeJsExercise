/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Role', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		RoleName: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true
		}
	}, {
		tableName: 'Role',
		timestamps: false
	});
};
