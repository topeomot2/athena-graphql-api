import 'graphql-import-node';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { DocumentNode } from 'apollo-link';
import { IResolvers } from 'graphql-tools';
import * as bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: 'test' });

async function startApolloServer(typeDefs: DocumentNode, resolvers: IResolvers) {
  // setup express app
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // start http server
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 3000;
  httpServer.listen({ port: PORT });
  httpServer.on('error', (error) => {
    logger.error(error);
  });
  httpServer.on('listening', () => {
    logger.info(`start${server.graphqlPath}`);
  });
}

export default startApolloServer;
