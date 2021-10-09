import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';
import { CountryResolvers } from './CountryResolver';

const resolvers: IResolvers = merge(CountryResolvers);
export default resolvers;
