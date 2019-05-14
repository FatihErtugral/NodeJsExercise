const { mergeResolvers } = require('../helpers/graphql/merge-object');
const user = require('./user/user.resolvers');
const role = require('./role/role.resolvers');

const resolvers = mergeResolvers(user, role);
console.log(resolvers);
module.exports = resolvers;
