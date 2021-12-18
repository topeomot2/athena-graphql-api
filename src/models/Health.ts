import { Category, Code, Country, Dimension, Indicator } from 'src/graphql/generated/graphql';
import ICacheService from './interfaces/ICacheService';
import IHealth from './interfaces/IHealth';
import IHealthDataService from './interfaces/IHealthDataService';

export default class Health implements IHealth {
  dataService: IHealthDataService;
  cacheService: ICacheService;

  constructor(dataService: IHealthDataService, cacheService: ICacheService) {
    this.dataService = dataService;
    this.cacheService = cacheService;
  }

  async getCountries(first: number, skip: number): Promise<Country[]> {
    const key = 'countries';
    let codes = await this.cacheService.getCodes(key);

    if (codes.length === 0) {
      const dimensions = await this.dataService.getData('country');
      if (dimensions.length === 0 || (dimensions[0].code && dimensions[0].code.length === 0)) return [];
      codes = dimensions[0].code;
      await this.cacheService.setCodes(key, codes, 2628288);
    }

    const countries: Country[] = [];

    codes.slice(skip, first + skip).forEach((item) => {
      countries.push({
        label: item.label,
        display: item.display,
        display_sequence: item.display_sequence,
        url: item.url,
        attr: item.attr,
      });
    });

    return countries;
  }

  getCodes(): Code[] {
    throw new Error('Method not implemented.');
  }

  async getIndicators(first: number, skip: number): Promise<Indicator[]> {
    const key = 'indicators:GHO';
    let codes = await this.cacheService.getCodes(key);

    if (codes.length === 0) {
      const dimensions = await this.dataService.getData('GHO');
      if (dimensions.length === 0 || (dimensions[0].code && dimensions[0].code.length === 0)) return [];
      codes = dimensions[0].code;
      await this.cacheService.setCodes(key, codes, 2628288);
    }
    const indicators: Indicator[] = [];

    codes.slice(skip, first + skip).forEach((item) => {
      indicators.push({
        label: item.label,
        display: item.display,
        display_sequence: item.display_sequence,
        url: item.url,
        attr: item.attr,
      });
    });

    return indicators;
  }

  async getIndicatorCategories(first: number, skip: number): Promise<Category[]> {
    const key = 'indicators:GHOCAT';
    let codes = await this.cacheService.getCodes(key);

    if (codes.length === 0) {
      const dimensions = await this.dataService.getData('GHOCAT');
      if (dimensions.length === 0 || (dimensions[0].code && dimensions[0].code.length === 0)) return [];
      codes = dimensions[0].code;
      await this.cacheService.setCodes(key, codes, 2628288);
    }
    const categories: Category[] = [];

    codes.slice(skip, first + skip).forEach((item) => {
      categories.push({
        label: item.label,
        display: item.display,
        display_sequence: item.display_sequence,
        url: item.url,
        attr: item.attr,
      });
    });

    return categories;
  }

  async getDimension(country: string, indicator: string, first: number, skip: number): Promise<Dimension[]> {
    const result = await this.dataService.getData(`GHO/${indicator}?filter=COUNTRY:${country.toUpperCase()}`);
    const dimensions: Dimension[] = [];
    result.slice(skip, first + skip).forEach((item) => {
      const code = item.code.map((c) => {
        return {
          label: c.label,
          display: c.display,
          display_sequence: c.display_sequence,
          url: c.url,
          attr: c.attr,
        } as Code;
      });
      dimensions.push({
        label: item.label,
        display: item.display,
        isMeasure: item.isMeasure,
        code,
      });
    });

    return dimensions;
  }
}
