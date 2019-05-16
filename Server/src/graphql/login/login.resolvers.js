const jwt = require('jsonwebtoken');
const colors = require('consol-color');
const bcrypt = require('bcrypt');
const tokenKey = require('../../config/token-key');

module.exports = {

   Mutation: {
      Login: async (parent, { input: { Email, Password } }, { db }) => {
         return await db.User
            .findOne({ where: { Email } })
            .then((result) => {
               if (result == null) {
                  console.log(colors.warn('Mail adresi kayıtlı değil'));
                  return Error('Mail adresi kayıtlı değil')
               }
               const match = bcrypt.compareSync(Password, result.Password);
               if (match) {
                  const token = jwt.sign({ id: result.UserId, iat: Math.floor(Date.now() / 1000) - 30 }, tokenKey.User, { algorithm: 'HS256' });
                  console.log(colors.ok(`Token: ${token}\n`));
                  // TODO CLIENT ADD localStorage.setItem('Token', token);
                  return { token };
               }
               console.log(colors.err('Hatalı parola'));
               return Error('Hatalı parola');
            }).catch((err) => console.error(err));
      },
   },
}