const resolvers = {
  Query: {
    totalPosts: () => ({
      name: "yatin",
      age: 28,
    }),
  },
};

module.exports = resolvers;
