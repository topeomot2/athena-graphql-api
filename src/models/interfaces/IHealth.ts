/* eslint-disable no-unused-vars */
import { Code, Country, Indicator } from 'src/graphql/generated/graphql';
import IHealthDataService from './IHealthDataService';

export default interface IHealth {
  dataService: IHealthDataService;
  getCodes(): Code[];
  getCountries(first: number, skip: number): Promise<Country[]>;
  getIndicators(first: number, skip: number): Promise<Indicator[]>;
}
