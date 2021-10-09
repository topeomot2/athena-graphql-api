import 'graphql-import-node';
import startApolloServer from './app';
import * as typeDefs from './graphql/schema.graphql';
import resolvers from './graphql/resolvers';

startApolloServer(typeDefs, resolvers);
