/* eslint-disable no-var */
import { createClient, RedisClientType } from "redis";

declare global {
  var redisClient: RedisClientType | undefined;
}

let redisClient: RedisClientType;

export const getRedisClient = async () => {
  if (!global.redisClient) {
    global.redisClient = createClient({
      url: process.env.REDIS_URL || "redis://localhost:6379",
    });

    global.redisClient.on("error", (err) => console.log("Redis error:", err));

    await global.redisClient.connect();
  }

  redisClient = global.redisClient;
  return redisClient;
};

export default getRedisClient;
