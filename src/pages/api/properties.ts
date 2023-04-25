import nc from "next-connect";
import { properties } from "@/Mock";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties);
});

export default handler;
