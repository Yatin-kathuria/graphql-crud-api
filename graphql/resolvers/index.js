const authenicationMutation = require("./Authenication/mutation");
const authenicationQuery = require("./Authenication/query");
const { GraphQLDateTime } = require("graphql-iso-date");

const resolvers = {
  Query: {
    ...authenicationQuery,
  },
  Mutation: {
    ...authenicationMutation,
  },
  ISODate: GraphQLDateTime,
};

module.exports = resolvers;
