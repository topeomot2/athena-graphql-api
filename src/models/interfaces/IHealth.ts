/* eslint-disable no-unused-vars */
import { Category, Code, Country, Indicator, Dimension } from 'src/graphql/generated/graphql';
import ICacheService from './ICacheService';
import IHealthDataService from './IHealthDataService';

export default interface IHealth {
  dataService: IHealthDataService;
  cacheService: ICacheService;
  getCodes(): Code[];
  getCountries(first: number, skip: number): Promise<Country[]>;
  getIndicators(first: number, skip: number): Promise<Indicator[]>;
  getIndicatorCategories(first: number, skip: number): Promise<Category[]>;
  getDimension(country: string, indicator: string, first: number, skip: number): Promise<Dimension[]>;
}
