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

  try {
    await upvoteProject(slug);

    res.status(200).send("");
  } catch (error) {
    console.error(error);

    res.status(404).send("");
  }
}
