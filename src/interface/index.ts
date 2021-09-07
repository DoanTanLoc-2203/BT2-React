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

export interface Cart {
  id: number;
  imageUrl: string;
  name: string;
  quantity: number;
  price: string;
}
