import type { NextApiRequest, NextApiResponse } from "next";
import upvoteProject from "backend/upvoteProject";

export default async function upvoteProjectAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.body;

  if (!slug) {
    res.status(400).send("");
    return;
  }

  await upvoteProject(slug);

  res.status(200).send("");
}
