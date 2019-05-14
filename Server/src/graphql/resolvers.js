const { mergeResolvers } = require('../helpers/graphql/merge-object');
const user = require('./user/user.resolvers');
const role = require('./role/role.resolvers');
const chat = require('./chat/chat.resolvers');
const login = require('./login/login.resolvers');

const resolvers = mergeResolvers(user, role, chat, login);

module.exports = resolvers;
