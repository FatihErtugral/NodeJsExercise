
const graphqlHTTP = require('express-graphql');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = importSchema(__dirname + '/schema.graphql');

const schema = makeExecutableSchema({ typeDefs, resolvers });
const x = 'asd';
module.exports = function (app) {

   app.use('/', graphqlHTTP(req => {
      return{
         schema,
         graphiql: true,
         context: {x}
      }}
   ));
}