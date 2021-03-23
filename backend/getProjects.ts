import createRedisClient from "./createRedisClient";

function importAll(r) {
  return r.keys().map(r);
}

const projectsFromCMS = importAll(
  (require as any).context("./projects", true, /\.json$/),
);

export default async () => {
  const redis = createRedisClient();
  const votes = await redis.mget(
    projectsFromCMS.map((project) => project.name),
  );
  const projectsWithVotes: Project[] = await Promise.all(
    projectsFromCMS.map(async (project, index) => ({
      ...project,
      votes: votes[index] || 0,
    })),
  );
  redis.disconnect();

  return projectsWithVotes.sort((a, b) => b.votes - a.votes);
};
