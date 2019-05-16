'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Role', [
    { Id: 1, RoleName: "User" },
    { Id: 2, RoleName: "Moderator" },
    { Id: 3, RoleName: "Admin" },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Role', null, {}),
};
