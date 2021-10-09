import 'graphql-import-node';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { DocumentNode } from 'apollo-link';
import { IResolvers } from 'graphql-tools';

async function startApolloServer(typeDefs: DocumentNode, resolvers: IResolvers) {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  await new Promise(() => httpServer.listen({ port: 3000 }));
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
}

export default startApolloServer;
