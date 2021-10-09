import 'graphql-import-node';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { DocumentNode } from 'apollo-link';
import { IResolvers } from 'graphql-tools';
import * as typeDefs from './graphql/schema.graphql';
import resolvers from './graphql/resolvers';
import * as bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: 'test' });

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
  httpServer.listen({ port: 3000 });
  httpServer.on('error', (error) => {
    logger.error(error);
  });
  httpServer.on('listening', () => {
    logger.info(`start${server.graphqlPath}`);
  });
}

startApolloServer(typeDefs, resolvers);
