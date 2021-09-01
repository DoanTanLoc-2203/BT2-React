/** @format */

export interface Tech {
  displayment: string;
  maxPower: string;
  topspeed: string;
  acceleration: string;
}

export interface Detail {
  overView: string;
  color: string[];
  technical: Tech;
}

export interface Item {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  detail: Detail;
}

export async function getData(apiUrl: string) {
  const response = await fetch(apiUrl);
  const data: Item[] = await response.json();
  return data;
}
