import { Code, Country, Indicator } from 'src/graphql/generated/graphql';
import IHealth from './interfaces/IHealth';
import IHealthDataService from './interfaces/IHealthDataService';

export default class Health implements IHealth {
  dataService: IHealthDataService;

  constructor(dataService: IHealthDataService) {
    this.dataService = dataService;
  }

  async getCountries(first: number, skip: number): Promise<Country[]> {
    const dimensions = await this.dataService.getData('country');
    if (dimensions.length === 0 || (dimensions[0].code && dimensions[0].code.length === 0)) return [];
    const countries: Country[] = [];

    dimensions[0].code.slice(skip, first + skip).forEach((item) => {
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

  getIndicators(): Promise<Indicator[]> {
    throw new Error('Method not implemented.');
  }
}
