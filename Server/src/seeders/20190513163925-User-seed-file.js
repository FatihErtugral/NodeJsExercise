'use strict';
let user = Array(10).fill(null);
const uuid = require('uuid');
const bcrypt = require('bcrypt');

for (let i = 0; i < user.length; i++) {
   user[i] = {
      UserId: uuid.v4(),
      UserName: `KOD${i}`,
      Password: (() => bcrypt.hashSync("Password@1", bcrypt.genSaltSync(2)))(),
      FirstName: 'Fatih',
      LastName: 'Ertuğral',
      Email: `fatihertugral89@${i}.com`,
      RoleID: 3
   };
}
module.exports = {
   up: (queryInterface, Sequelize) => queryInterface.bulkInsert('User',user, {}),

   down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User', null, {}),
};
