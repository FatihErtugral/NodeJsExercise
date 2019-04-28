const colors = require('../../config/consolColor');
const passport = require('passport');
const uuidv1 = require('uuid/v1');
const db = require('../../db/models');
const Op = db.Sequelize.Op;

module.exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user/* , info */) => {
    if (err) { return next(err); }
    if (!user) {
      return res.status(401)
        .send({ code: 'unauthorized' }).end();
    }
    return req.logIn(user, (errLogin) => {
      if (errLogin) {
        return next(errLogin);
      }
      return res.send(user);
    });
  })(req, res, next);
};

module.exports.register = (req, res, next) => {

  let user = {
    'username': req.body.username,
    'password': req.body.password,
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'email': req.body.email
  }

  let ctrl = false;

  for(let key in user){
    if(user[key] === null || user[key] === undefined)
    {
      ctrl=true; break;
    }
  };

  if(ctrl) return (
    res.status(400).send('Hatalı eksik giriş').end(),
    console.log(colors.err('λ Hatalı kayıt denendi'),user)
  );

  db.users.findOne({
    where:{[Op.or]:[{email:user.email},{username:user.username}]}
  }).then((result)=> {

    if(result){
      console.log(colors.warning('λ Böyle bir kullanıcı mevcut'));
      return res.status(200).send('Böyle bir kullanıcı mevcut').end();
    }
    user.uuid = uuidv1();
    users
    .build(user)
    .save()
    .then(newUser => console.log(colors.ok('λ Yeni bir kullanıcı kayıt oldu'),newUser.email, newUser.username))
    .catch(err => console.log(err));
    res.status(201).send({username:user.username, pass:user.password});
  }).catch((err)=>console.error(err));
};

module.exports.logout = (req, res, next) => {
  req.logout();
  res.status(200).send({ success: true });
};