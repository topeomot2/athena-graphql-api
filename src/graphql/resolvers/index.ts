import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';
import { CountryResolvers } from './CountryResolver';
import { IndicatorResolvers } from './IndicatorResolver';
import { DimensionResolvers } from './DimensionResolver';

const resolvers: IResolvers = merge(CountryResolvers, IndicatorResolvers, DimensionResolvers);
export default resolvers;
