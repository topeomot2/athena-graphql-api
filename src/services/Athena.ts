import axios from 'axios';
import { IAthenaResponse } from 'src/models/interfaces';
import { URL } from 'url';

const baseUrl = process.env.ATHENA_API || 'http://apps.who.int/gho/athena/api/';

export const Athena = {
  getData: function (path: string) {
    const url = new URL(path, baseUrl);

    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url.searchParams.keys.length === 0 ? `${url.href}?format=json` : `${url.href}&format=json`,
      })
        .then((res) => {
          resolve((res.data as IAthenaResponse).dimension);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
