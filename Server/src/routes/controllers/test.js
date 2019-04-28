const passport = require('passport');


module.exports.auth = (req, res, next)=> {
  if (req.isAuthenticated()) {
    return res.status(200).send('Sadece kayıtlı üyeler erişebilir').end();
  }
  return res.status(401).send({ code: 'unauthorized' }).end();
};
module.exports.unauth = (req, res, next)=> {
  return res.status(200).send('Herkese açık rota').end();
};