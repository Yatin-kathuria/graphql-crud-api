const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type TotalPosts {
    name: String!
    age: Int!
  }

  type Response {
    message: String
  }

  enum AllowedRoles {
    admin
    user
  }

  type Query {
    totalPosts: TotalPosts!
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      role: AllowedRoles!
    ): Response
  }
`;

module.exports = typeDefs;
