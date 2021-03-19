import type { NextApiRequest, NextApiResponse } from "next";
import upvoteProject from "../../../backend/upvoteProject";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { projectName } = req.body;

  if (!projectName) {
    res.status(400).send("");
    return;
  }

  await upvoteProject(projectName);

  res.status(200).send("");
};
