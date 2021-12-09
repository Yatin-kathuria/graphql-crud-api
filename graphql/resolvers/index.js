const { GraphQLDateTime } = require('graphql-iso-date');
const authenicationMutation = require('./Authenication/mutation');
const authenicationQuery = require('./Authenication/query');
const userMutation = require('./user/mutation');
const userQuery = require('./user/query');
const profileQuery = require('./profile/query');
const profileMutation = require('./profile/mutation');
const cityQuery = require('./city/query');

const resolvers = {
  Query: {
    ...authenicationQuery,
    ...userQuery,
    ...profileQuery,
    ...cityQuery,
  },
  Mutation: {
    ...authenicationMutation,
    ...userMutation,
    ...profileMutation,
  },
  ISODate: GraphQLDateTime,
};

module.exports = resolvers;
