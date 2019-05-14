const { mergeResolvers } = require('../helpers/graphql/merge-object');
const user = require('./user/user.resolvers');
const role = require('./role/role.resolvers');
const chat = require('./chat/chat.resolvers');

const resolvers = mergeResolvers(user, role, chat);

module.exports = resolvers;
