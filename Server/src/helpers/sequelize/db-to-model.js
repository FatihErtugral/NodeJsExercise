const SequelizeAuto = require('sequelize-auto');
const path = require('path');
require('dotenv').config({path: path.join(__dirname,"../../config/.env")});

var auto = new SequelizeAuto(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    directory: path.join(__dirname,"../../models/"), // prevents the program from writing to disk
    port: process.env.DB_PORT,
    additional: {
        timestamps: false
        //...
    },
    //tables: ['table1', 'table2', 'table3']
    //...
});


auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});