const { GraphQLDateTime } = require("graphql-iso-date");
const authenicationMutation = require("./Authenication/mutation");
const authenicationQuery = require("./Authenication/query");
const userMutation = require("./user/mutation");
const userQuery = require("./user/query");

const resolvers = {
  Query: {
    ...authenicationQuery,
    ...userQuery,
  },
  Mutation: {
    ...authenicationMutation,
    ...userMutation,
  },
  ISODate: GraphQLDateTime,
};

module.exports = resolvers;
