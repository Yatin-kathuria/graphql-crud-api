const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar ISODate

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

  type Token {
    token: String!
  }

  type ForgetPassword {
    resetToken: String!
    message: String!
  }

  type Query {
    token: Token!
  }

  type Mutation {
    register(
      name: String!
      email: String!
      password: String!
      role: AllowedRoles!
    ): Response
    login(email: String!, password: String!): Login
    verify(id: String!): Response
    forgetPassword(email: String!): ForgetPassword
    reset(resetToken: String!, password: String!): Response
  }
`;

module.exports = typeDefs;
