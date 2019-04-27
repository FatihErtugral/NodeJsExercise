const colors = require('../../config/consolColor');
const router = require('express').Router();
const db = require('../../db/models/');
const uuidv1 = require('uuid/v1');
const users = db.users;
const Op = db.Sequelize.Op;

router.get('/register', (req, res, next) => {

  let user = {
    'username': req.body.username,
    'password': req.body.password,
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'email': req.body.email
  }

  let ctrl = false;

  for(let key in user){
    if(user[key] == null || user[key] == undefined)
      ctrl=true;
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
});

module.exports = router;