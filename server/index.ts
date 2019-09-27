import { GraphQLServer } from "graphql-yoga";
import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";

const PORT = 4000;
const endpoint = "/graphql";
const playground = "/playground";
const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ endpoint, playground }, () => {
  console.log(`Server playground: http://localhost:${PORT}${playground}`);
  console.log(`Server endpoint: http://localhost:${PORT}${endpoint}`);
});
