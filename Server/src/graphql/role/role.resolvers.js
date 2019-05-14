
module.exports = {

   Query: {
      RoleGet: async (parent, { Id }, { db }) => {
         return await db.Role.findByPk(Id).then(roles => roles)
      },
   }
}