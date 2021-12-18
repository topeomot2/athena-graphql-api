import { IResolvers } from 'graphql-tools';
import Health from '../../models/Health';
import IHealth from '../../models/interfaces/IHealth';
import IHealthDataService from '../../models/interfaces/IHealthDataService';
import Athena from '../../services/Athena';
import { Category, Indicator, QueryIndicatorCategoriesArgs, QueryIndicatorsArgs } from '../generated/graphql';
import cache from '../../services/RedisCache';

const dataService: IHealthDataService = new Athena();
let health: IHealth;
cache.then((cacheService) => {
  health = new Health(dataService, cacheService);
});

export const IndicatorResolvers: IResolvers = {
  Query: {
    async indicators(_: void, args: QueryIndicatorsArgs): Promise<[Indicator]> {
      const response = await health.getIndicators(args.first as number, args.skip as number);
      return response as [Indicator];
    },
    async indicatorCategories(_: void, args: QueryIndicatorCategoriesArgs): Promise<[Category]> {
      const response = await health.getIndicatorCategories(args.first as number, args.skip as number);
      return response as [Category];
    },
  },
};
