export interface Property {
  id: number;
  status: string;
  type: string;
  address: {
    line: string;
    city: string;
    state: string;
    state_code: string;
    lat: number;
    long: number;
  };
  price: number;
  beds: number;
  meters: number;
  garages: number;
  images: {
    href: string;
  }[];
}

export interface ImageData {
  src: string;
  alt: string;
}
