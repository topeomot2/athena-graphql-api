import { IResolvers } from 'graphql-tools';
import { QueryCountriesArgs, Country } from '../generated/graphql';

export const CountryResolvers: IResolvers = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    async countries(_: void, args: QueryCountriesArgs): Promise<[Country]> {
      return [
        {
          label: 'ALB',
          display: 'Albania',
          display_sequence: 2,
          attr: [
            {
              category: 'WORLD_BANK_INCOME_GROUP_GNI_REFERENCE_YEAR',
              value: '2017',
            },
          ],
        },
      ];
    },
  },
};
