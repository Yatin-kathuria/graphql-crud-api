const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar ISODate

  type TotalPosts {
    name: String!
    age: Int!
  }

  type User {
    _id: String!
    name: String!
    email: String!
    role: String!
    verified: Boolean
    phone: String
    city: String
    country: String
    urlTwitter: String
    urlGitHub: String
    createdAt: ISODate
    updatedAt: ISODate
  }

  type Login {
    message: String!
    token: String!
    user: User!
  }

  type Response {
    message: String!
  }

  enum AllowedRoles {
    admin
    user
  }

  type Query {
    totalPosts: TotalPosts!
    login(email: String!, password: String!): Login
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
