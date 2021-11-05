require("dotenv").config();
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const dbConnection = require("./connection");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

//graphql server
async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => err.message,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

app.get("/rest", (req, res) => {
  res.json({
    data: "API is working...",
  });
});

app.listen(process.env.PORT, async () => {
  await dbConnection();
  console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
});
