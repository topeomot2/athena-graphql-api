import { IResolvers } from 'graphql-tools';
import Health from '../../models/Health';
import IHealth from '../../models/interfaces/IHealth';
import IHealthDataService from '../../models/interfaces/IHealthDataService';
import Athena from '../../services/Athena';
import { Indicator, QueryIndicatorsArgs } from '../generated/graphql';

const dataService: IHealthDataService = new Athena();
const health: IHealth = new Health(dataService);

export const IndicatorResolvers: IResolvers = {
  Query: {
    async indicators(_: void, args: QueryIndicatorsArgs): Promise<[Indicator]> {
      const response = await health.getIndicators(args.first as number, args.skip as number);
      return response as [Indicator];
    },
  },
};
