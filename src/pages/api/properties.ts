import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import axios from "axios";

interface Property {
  id: string;
  status: string;
  type: string;
  address: {
    line: string;
    city: string;
    state: string;
    lat: number;
    long: number;
  };
  beds: number;
  meters: number;
  image: string;
}

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const apiResponse = await axios({
    method: "GET",
    url: "https://real-estate-usa.p.rapidapi.com/api/v1/properties",
    params: { postal_code: "94105" },
    headers: {
      "X-RapidAPI-Key": "cf4316a3d4msh50801f326c5c5c4p15c7d6jsnb75ee3f49dc8",
      "X-RapidAPI-Host": "real-estate-usa.p.rapidapi.com",
    },
  });
  const data = await apiResponse.data;
  const properties = data.properties.slice(0, 15);

  res.status(200).json(
    properties
      .map((property: any) => {
        if (!property.listings[0].photo) {
          return;
        }
        return {
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
          image: property.listings[0].photo.href,
        } as Property;
      })
      .filter((property: any) => property)
  );
});

export default handler;
