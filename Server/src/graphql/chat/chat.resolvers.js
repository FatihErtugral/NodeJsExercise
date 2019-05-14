
module.exports = {

   Query: {
      ChatGetId: async (parent, { Id }, { db }, info) => {
         return await db.Chat.findByPk(Id).then(chat => chat);
      },
      ChatGetAll: async (parent, args, { db }, info) => {
         return await db.Chat.findAll({ order: [['createdAt']] })
      }
   },

   Mutation: {
      ChatCreate: async (parent, { input }, { db }, info) => {
         const { UserId, Text } = input;
         return await db.Chat
            .build({UserId, Text})
            .save()
            .then(text => text)
            .catch(err => err);
      },
   }
}