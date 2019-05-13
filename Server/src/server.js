

console.clear();
require('dotenv').config({path: __dirname+'/config/.env'});

const colors = require('consol-color');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const initializeRoutes = require('./routes/index');
const initializePassport = require('./helpes/passport');
const app = express();

const {PORT, HOST} = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'cats',
  resave: true,
  saveUninitialized: true,
}));
initializePassport(app);
initializeRoutes(app);

app.listen(PORT, HOST,
  () => console.log(colors.info(`Sunucu çalışıyor http://${HOST}:${PORT}/`)));

module.exports = app;