const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/',(req, res) => res.send('hello world'));
app.use(router);
app.listen(3000);
module.exports = app;