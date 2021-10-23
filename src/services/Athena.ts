import axios from 'axios';
import IHealthDataService, { IDimension, IResponse } from 'src/models/IHealthDataInterface';
import { URL } from 'url';

const baseUrl = process.env.ATHENA_API || 'http://apps.who.int/gho/athena/api/';

export default class Athena implements IHealthDataService{
  baseUrl: string = process.env.ATHENA_API || 'http://apps.who.int/gho/athena/api/';

  constructor(){}
  
  getData(path: string): Promise<IDimension[]> {
    const url = new URL(path, baseUrl);

    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url.searchParams.keys.length === 0 ? `${url.href}?format=json` : `${url.href}&format=json`,
      })
        .then((res) => {
          resolve((res.data as IResponse).dimension);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
