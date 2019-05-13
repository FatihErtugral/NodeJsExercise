'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const colors = require('consol-color');
const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: true,
  },
);
sequelize
  .authenticate()
  .then(() => {
    console.log(colors.info(`⛁ Veritabanı bağlantısı başarıyla kuruldu: ${process.env.DB_DIALECT}`));
  })
  .catch(err => {
    console.error(colors.err('Veritabanına bağlanılamıyor:'), err);
  });

//
//! Model klasöründeki modelleri veritabanında oluşturuyor.
sequelize.sync({
  force: true
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
