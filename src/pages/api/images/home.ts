import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    Images: [
      {
        src: "https://www.imoveisan.com.br/assets/img/banner-slider-2.jpg",
        alt: "banner",
      },
      {
        src: "https://www.imoveisan.com.br/assets/img/banner-slider-2.jpg",
        alt: "banner",
      },
      {
        src: "https://www.imoveisan.com.br/assets/img/banner-slider-2.jpg",
        alt: "banner",
      },
      {
        src: "https://www.imoveisan.com.br/assets/img/banner-slider-2.jpg",
        alt: "banner",
      },
    ],
  });
});

export default handler;
