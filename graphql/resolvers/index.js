const authenicationMutation = require("./Authenication/mutation");
const authenicationQuery = require("./Authenication/query");
const { GraphQLDateTime } = require("graphql-iso-date");

const resolvers = {
  Query: {
    totalPosts: () => ({
      name: "yatin",
      age: 28,
    }),
    ...authenicationQuery,
  },
  Mutation: {
    ...authenicationMutation,
  },
  ISODate: GraphQLDateTime,
};

module.exports = resolvers;
