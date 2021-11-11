import request, { gql } from "graphql-request";
import createRedisClient from "./createRedisClient";

const QUERY = gql`
  query ($slug: String!) {
    allCryptobrand(where: { slug: { current: { eq: $slug } } }) {
      _id
    }
  }
`;

export default async function upvoteProject(
  projectName: string,
): Promise<void> {
  const project = (
    await request(process.env.CMS_URL, QUERY, { slug: projectName })
  ).allCryptobrand?.[0];

  if (!project) throw new Error("project does not exist");

  const redis = createRedisClient();

  await redis.incr(projectName);

  redis.disconnect();
}
