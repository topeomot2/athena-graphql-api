import { RedisClientType } from 'redis/dist/lib/client';
import redis from '../../src/services/RedisCache';

const cleanTestCache = async () => {
  if (process.env.NODE_ENV !== 'test') {
    return false;
  }

  const cache = await redis;
  const client = cache.client as RedisClientType;
  for await (const key of client.scanIterator({ MATCH: `${cache.baseKey}:*` })) {
    await client.del(key);
  }
};

export default async () => {
  // clear everything out from previous test runs
  await cleanTestCache();
};
