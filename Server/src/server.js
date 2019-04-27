const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/routes');
const app = express();

const result = dotenv.config({path: './src/config/.env'});
if (result.error) {
  throw result.error
}
//console.log(result.parsed);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/',(req, res) => res.send('hello world'));
app.use(router);
app.listen(process.env.PORT);
module.exports = app;