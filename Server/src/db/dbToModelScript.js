const dotenv = require('dotenv');
var SequelizeAuto = require('sequelize-auto');
dotenv.config({path: './src/config/.env'});

var auto = new SequelizeAuto(
  process.env.DB_DBASE,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    directory: './src/db/models', // prevents the program from writing to disk
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