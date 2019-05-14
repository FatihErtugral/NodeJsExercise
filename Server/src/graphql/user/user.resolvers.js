
const colors = require('consol-color');
const Yup = require('yup');
const jwt = require('jsonwebtoken');
const tokenKey = require('../../config/token-key');

module.exports = {

   Query: {
      UserGet: async (parent, { UserId }, { db }) => {
         return await db.User.findByPk(UserId).then(user => user)
      },
      UserGetAll: async (parent, args, { db }) => await db.User.findAll({ order: [['username']] }),
   },

   Mutation: {
      UserCreate: async (parent, { input }, { db }) => {
         const User = db.User;
         const Op = db.Sequelize.Op;
         const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
         const { UserName, Email, Password, FirstName, LastName } = input;

         const SignupSchema = Yup.object().shape({
            UserName: Yup.string()
               .min(3, 'Minimum 3 karakter olabilir.')
               .max(45, 'Maximum 20 karakter olabilir.')
               .required('Bu alan zorunludur.'),

            Password: Yup.string()
               .max(45, '*')
               .matches(regex, 'En az sekiz karakter, en az bir harf, bir sayı ve bir özel karakter')
               .required('Bu alan zorunludur.'),

            FirstName: Yup.string()
               .min(2, 'Minimum 2 karakter olabilir.')
               .max(45, 'Maximum 35 karakter olabilir.')
               .required('Bu alan zorunludur.'),

            LastName: Yup.string()
               .min(2, 'Minimum 2 karakter olabilir.')
               .max(45, 'Maximum 35 karakter olabilir.')
               .required('Bu alan zorunludur.'),

            Email: Yup.string()
               .email('Geçersiz e-posta')
               .required('Bu alan zorunludur.'),
         });

         return await SignupSchema
            .validate({UserName, Password, FirstName, LastName, Email})
            .then(() => {
               return User
                  .findOne({ where: { [Op.or]: [{ Email }, { UserName }] } })
                  .then((result) => {
                     if (result) {
                        console.log(colors.warn('Böyle bir kullanıcı mevcut'));
                        return Error('Böyle bir kullanıcı mevcut');
                     }
                     return User
                        .build(input)
                        .save()
                        .then(newUser => {
                           console.log(colors.ok('Yeni bir kullanıcı kayıt oldu'));

                           const token = jwt.sign(
                              { id: User.UserId, iat: Math.floor(Date.now() / 1000) - 30 },
                              tokenKey.User,
                              { algorithm: 'HS256' });

                           console.log(token);
                           return { auth:true ,token: token};
                        })
                        .catch(err => {
                           console.log(colors.err('Sunucu kayıt olma hatası'), err.errors, err.fields, err.name, err);
                           return;
                        });
                  })
            })
            .catch(err => err);
      },
   },

   User: {
      Roles: async({RoleId}, arg, { db }) => {
         return await db.Role.findByPk(RoleId).then(roles => roles)
       },
   },
}
