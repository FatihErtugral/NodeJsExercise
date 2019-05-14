'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Role', [
    { id: 1, RoleName: "User" },
    { id: 2, RoleName: "Moderator" },
    { id: 3, RoleName: "Admin" },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Role', null, {}),
};
