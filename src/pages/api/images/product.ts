import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    Images: [
      {
        src: "https://i.pinimg.com/736x/d5/f6/36/d5f636fc2351fb3795688c6d4ea08d6a--modern-home-design-exterior.jpg",
        alt: "banner",
      },
      {
        src: "https://i.pinimg.com/736x/d5/f6/36/d5f636fc2351fb3795688c6d4ea08d6a--modern-home-design-exterior.jpg",
        alt: "banner",
      },
      {
        src: "https://i.pinimg.com/736x/d5/f6/36/d5f636fc2351fb3795688c6d4ea08d6a--modern-home-design-exterior.jpg",
        alt: "banner",
      },
      {
        src: "https://i.pinimg.com/736x/d5/f6/36/d5f636fc2351fb3795688c6d4ea08d6a--modern-home-design-exterior.jpg",
        alt: "banner",
      },
    ],
  });
});

export default handler;
