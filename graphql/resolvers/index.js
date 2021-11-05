const authenicationMutation = require("./Authenication/mutation");

const resolvers = {
  Query: {
    totalPosts: () => ({
      name: "yatin",
      age: 28,
    }),
  },
  Mutation: {
    ...authenicationMutation,
  },
};

module.exports = resolvers;
