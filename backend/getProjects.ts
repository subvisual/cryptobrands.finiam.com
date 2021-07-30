import { gql, request } from "graphql-request";
import createRedisClient from "./createRedisClient";

const QUERY = gql`
  query {
    allCryptobrand {
      name
      slug {
        current
      }
      link
      linkText
      studioUrl
      studioName
      image {
        asset {
          metadata {
            lqip
          }
          url
        }
      }
    }
  }
`;

export default async () => {
  const projectsFromCMS = (await request(process.env.CMS_URL, QUERY))
    .allCryptobrand;
  const redis = createRedisClient();
  const votes = await redis.mget(
    projectsFromCMS.map((project) => project.slug.current),
  );
  const projectsWithVotes: Project[] = await Promise.all(
    projectsFromCMS.map(async (project, index) => ({
      name: project.name,
      slug: project.slug.current,
      link: project.link,
      linkText: project.linkText,
      studioUrl: project.studioUrl,
      studioName: project.studioName,
      imagePath: project.image.asset.url,
      imagePlaceholder: project.image.asset.metadata.lqip,
      votes: votes[index] || 0,
    })),
  );
  redis.disconnect();

  return projectsWithVotes.sort((a, b) => b.votes - a.votes);
};
