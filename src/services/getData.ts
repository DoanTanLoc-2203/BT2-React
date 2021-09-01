/** @format */

export interface Tech {
  displayment: string;
  maxpower: string;
  topspeed: string;
  acceleration: string;
}

export interface Detail {
  overview: string;
  color: string[];
  technical: Tech;
}

export interface Item {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  detail: {
    overview: string;
    color: string[];
    technical: {
      displayment: string;
      maxpower: string;
      topspeed: string;
      acceleration: string;
    };
  };
}

export async function getData(apiUrl: string) {
  const response = await fetch(apiUrl);
  const data: Item[] = await response.json();
  return data;
}
