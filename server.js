require("dotenv").config();
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const dbConnection = require("./connection");
const userModal = require("./model/user");
const hashService = require("./Services/hashService");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

//graphql server
async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => err.message,
    context: async ({ req }) => {
      const authorization = req.headers.authorization;
      if (!authorization) return { LOGGED_IN: false };

      const token = authorization.split(" ")[1];
      const verified = hashService.verifyToken(token);
      if (!verified) return { LOGGED_IN: false };

      const user = await userModal.findById(verified._id);
      return {
        LOGGED_IN: true,
        user,
        ADMIN: user.role === "admin" ? true : false,
      };
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

app.get("/", (req, res) => {
  res.redirect("/graphql");
});

app.listen(process.env.PORT, async () => {
  await dbConnection();
  console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
});
