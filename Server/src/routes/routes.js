const router = require('express').Router();

router.use('/', require('./controllers/testControl.js'));

module.exports = router;