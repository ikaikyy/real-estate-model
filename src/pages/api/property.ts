import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import axios from "axios";

import type { Property } from "@/Types";

const { api_key } = process.env;

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const apiResponse = await axios({
    method: "GET",
    url: `https://real-estate-usa.p.rapidapi.com/api/v1/properties/${req.headers.id}`,
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
    },
  });

  const property = await apiResponse.data.property;

  res.status(200).json({
    id: property.id,
    status: property.prop_status,
    type: property.listings[0].prop_type,
    address: {
      line: property.listings[0].address.line,
      city: property.listings[0].address.city,
      state: property.listings[0].address.state,
      lat: property.listings[0].address.lat,
      long: property.listings[0].address.long,
    },
    beds: property.listings[0].beds,
    meters: Math.floor(property.listings[0].sqft / 10.764),
    images: property.listings[0].photos,
  } as Property);
});

export default handler;
