import { createClient } from 'redis';
import { RedisClientType } from 'redis/dist/lib/client';
import ICacheService from '../models/interfaces/ICacheService';
import { ICode } from 'src/models/interfaces/IHealthDataService';
import logger from './Logger';

const getRedisClient = async (url: string | null | undefined): Promise<RedisClientType> => {
  url = url || 'redis://127.0.0.1:6379';
  const client = createClient({ url });
  client.on('connect', () => logger.info('Redis Client Connected'));
  client.on('error', (err) => logger.info('Redis Client Error', err));
  await client.connect();
  return client;
};

const RedisCache = async (url: string | null | undefined, baseKey: string = 'whoathena'): Promise<ICacheService> => {
  const client = await getRedisClient(url);
  const get = async (key: string): Promise<string | null> => {
    return await client.get(`${baseKey}:${key}`);
  };
  const set = async (key: string, value: string, period: number): Promise<boolean> => {
    const response = await client.setEx(`${baseKey}:${key}`, period, value);
    return response !== null;
  };

  return {
    baseKey,
    client,
    get,
    set,
    getCodes: async (key: string): Promise<ICode[]> => {
      const response = await get(key);
      return response !== null ? JSON.parse(response) : [];
    },
    setCodes: async (key: string, value: ICode[], period: number): Promise<boolean> => {
      return set(key, JSON.stringify(value), period);
    },
  };
};

const cache = RedisCache(process.env.CACHE_URL);
export default cache;
