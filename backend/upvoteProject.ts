import createRedisClient from "./createRedisClient";

// This is Lua, and it only increments a key if it exist
// to avoid DDOS and filling our redis instance with
// a bunch of random keys.
const REDIS_SCRIPT = `
  local exists = redis.call('exists', KEYS[1])
  if exists == 1 then
      return redis.call('incr', KEYS[1])
  end

  return
`;

export default async (projectName: string) => {
  const redis = createRedisClient();

  await redis.eval(REDIS_SCRIPT, 1, projectName);

  redis.disconnect();
};
