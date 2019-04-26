const router = require('express').Router();

router.get('/test', (req, res) => {
  res.send('Test Routers').end();
});

module.exports = router;