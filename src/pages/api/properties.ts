import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import axios from "axios";

import type { Property } from "@/Types";

const { RAPID_API_KEY } = process.env;

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const apiResponse = await axios({
    method: "GET",
    url: `https://real-estate-usa.p.rapidapi.com/api/v1/properties`,
    params: {
      postal_code: "94105",
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
    },
  });

  const properties = await apiResponse.data.properties;

  res.status(200).json(
    properties
      .map(
        (property: any) =>
          ({
            id: property.id,
            status: property.prop_status,
            type: property.listings[0].prop_type,
            address: {
              line: property.listings[0].address.line,
              city: property.listings[0].address.city,
              state: property.listings[0].address.state,
              state_code: property.listings[0].address.state_code,
              lat: property.listings[0].address.lat,
              long: property.listings[0].address.long,
            },
            beds: property.listings[0].beds,
            price: property.listings[0].price,
            meters: Math.floor(property.listings[0].sqft / 10.764),
            garages: property.listings[0].garage,
            images: property.listings[0].photos,
          } as Property)
      )
      .filter((r: any) => r.images)
  );
});

export default handler;
