import nc from "next-connect";
import { bannerImages } from "@/Mock";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ Images: bannerImages });
});

export default handler;
