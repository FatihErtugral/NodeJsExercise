

console.clear();
require('dotenv').config({path: __dirname+'/config/.env'});

const colors = require('consol-color');
const express = require('express');
const initGraphql = require('./graphql');
const {PORT, HOST} = process.env;
const app = express();

initGraphql(app);
app.listen(PORT, HOST,
  () => console.log(colors.info(`Sunucu çalışıyor http://${HOST}:${PORT}/`)));

module.exports = app;