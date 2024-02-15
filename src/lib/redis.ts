import { Redis } from '@upstash/redis';

console.log('REDIS_KEY:', process.env.REDIS_KEY); // Log the REDIS_KEY value

export const redis = new Redis({
  url: 'https://eu2-lucky-goose-31276.upstash.io',
  token: process.env.REDIS_KEY!,
});