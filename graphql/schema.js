const { gql } = require('apollo-server-express');

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

  type createUserResponse {
    message: String!
    user: User
  }

  type singleUserResponse {
    user: User
  }

  type City {
    name: String!
    _id: String!
  }

  input registerInput {
    name: String!
    email: String!
    password: String!
    role: AllowedRoles!
  }

  input createUserInput {
    name: String!
    email: String!
    password: String!
    phone: String
    city: String
    country: String
    role: AllowedRoles!
  }

  input UserDetailsInput {
    name: String
    email: String
    role: String
    phone: String
    city: String
    country: String
  }

  type Query {
    token: Token!
    singleUser(id: String!): singleUserResponse
    users(page: Int, limit: Int, sort: String, order: Int): [User]
    profile: User
    allCity: [City]
  }

  type Mutation {
    register(input: registerInput): Response
    login(email: String!, password: String!): Login
    verify(id: String!): Response
    forgetPassword(email: String!): ForgetPassword
    reset(resetToken: String!, password: String!): Response
    createUser(input: createUserInput): createUserResponse
    deleteUser(id: String!): Response
    updateUser(id: String!, userDetails: UserDetailsInput!): Response
    updateProfile(userDetails: UserDetailsInput!): Response
    changePassword(oldPassword: String!, newPassword: String!): Response
  }
`;

module.exports = typeDefs;
