import { IResolvers } from 'graphql-tools';
import Health from '../../models/Health';
import IHealth from '../../models/interfaces/IHealth';
import IHealthDataService from '../../models/interfaces/IHealthDataService';
import Athena from '../../services/Athena';
import { Dimension, QueryStatsArgs } from '../generated/graphql';
import cache from '../../services/RedisCache';

const dataService: IHealthDataService = new Athena();
let health: IHealth;
cache.then((cacheService) => {
  health = new Health(dataService, cacheService);
});

export const DimensionResolvers: IResolvers = {
  Query: {
    async stats(_: void, args: QueryStatsArgs): Promise<[Dimension]> {
      const { country, indicator, first, skip } = args;
      const response = await health.getDimension(
        country as string,
        indicator as string,
        first as number,
        skip as number,
      );
      return response as [Dimension];
    },
  },
};
