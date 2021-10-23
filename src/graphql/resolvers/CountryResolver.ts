import { IResolvers } from 'graphql-tools';
import Health from '../../models/Health';
import IHealth from '../../models/interfaces/IHealth';
import IHealthDataService from '../../models/interfaces/IHealthDataService';
import Athena from '../../services/Athena';
import { QueryCountriesArgs, Country } from '../generated/graphql';

const dataService: IHealthDataService = new Athena();
const health: IHealth = new Health(dataService);

export const CountryResolvers: IResolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    async countries(_: void, args: QueryCountriesArgs): Promise<[Country]> {
      const response = await health.getCountries();
      return response as [Country];
    },
  },
};
