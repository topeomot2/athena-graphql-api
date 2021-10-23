import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';
import { CountryResolvers } from './CountryResolver';
import { IndicatorResolvers } from './IndicatorResolver';

const resolvers: IResolvers = merge(CountryResolvers, IndicatorResolvers);
export default resolvers;
