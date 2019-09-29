import { GraphQLServer } from "graphql-yoga";
import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";

const server = new GraphQLServer({ typeDefs, resolvers });
const options = {
  port: 4000,
  endpoint: "/graphql",
  playground: "/playground"
};

server.start(options, () => {
  const { port, playground, endpoint } = options;

  console.log(`Server playground: http://localhost:${port}${playground}`);
  console.log(`Server endpoint: http://localhost:${port}${endpoint}`);
});
