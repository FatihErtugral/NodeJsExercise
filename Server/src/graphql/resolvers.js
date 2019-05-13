const { mergeResolvers } = require('../helpers/graphql/merge-object');
const user = require('./user/user.resolvers');

const resolvers = mergeResolvers(user);
console.log(resolvers);
module.exports = resolvers;
