import { Code, Country } from 'src/graphql/generated/graphql';
import IHealthDataService from './IHealthDataService';

export default interface IHealth {
  dataService: IHealthDataService;
  getCodes(): Code[];
  getCountries(): Promise<Country[]>;
}
