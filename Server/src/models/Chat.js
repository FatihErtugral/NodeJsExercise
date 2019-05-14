/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Chat', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		UserId: {
			type: DataTypes.UUID,
			allowNull: true
		},
		Text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
		}
	}, {
		tableName: 'Chat',
		timestamps: true
	});
};
