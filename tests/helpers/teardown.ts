import { RedisClientType } from 'redis/dist/lib/client';
import redis from '../../src/services/RedisCache';

const closeTestCache = async () => {
  const cache = await redis;
  const client = cache.client as RedisClientType;
  await client.disconnect();
};

export default async () => {
  // clear everything out from previous test runs
  await closeTestCache();
};
