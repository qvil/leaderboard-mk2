import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
};

const PORT = 4000;
const endpoint = "/graphql";
const playground = "/playground";
const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ endpoint, playground }, () => {
  console.log(`Server playground: http://localhost:${PORT}${playground}`);
  console.log(`Server endpoint: http://localhost:${PORT}${endpoint}`);
});
