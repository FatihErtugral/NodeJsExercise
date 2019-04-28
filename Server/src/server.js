const dotenv = require('dotenv');
const result = dotenv.config({path: __dirname+'/config/.env'});
if (result.error) {throw result.error};

const colors = require('./config/consolColor');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const initializeRoutes = require('./routes/index');
const initializePassport = require('./config/passport');
const app = express();

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

app.listen(process.env.PORT,
  () => {
    console.clear();
    console.log(
      colors.connect(`λ Sunucu çalışıyor`),
      colors.ok(`http://localhost:${process.env.PORT}/`)
    );
  });
module.exports = app;