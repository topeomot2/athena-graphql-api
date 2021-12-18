import { IResolvers } from 'graphql-tools';
import cache from '../../services/RedisCache';
import Health from '../../models/Health';
import IHealth from '../../models/interfaces/IHealth';
import IHealthDataService from '../../models/interfaces/IHealthDataService';
import Athena from '../../services/Athena';
import { QueryCountriesArgs, Country } from '../generated/graphql';

const dataService: IHealthDataService = new Athena();
let health: IHealth;
cache.then((cacheService) => {
  health = new Health(dataService, cacheService);
});

export const CountryResolvers: IResolvers = {
  Query: {
    async countries(_: void, args: QueryCountriesArgs): Promise<[Country]> {
      const response = await health.getCountries(args.first as number, args.skip as number);
      return response as [Country];
    },
  },
};
