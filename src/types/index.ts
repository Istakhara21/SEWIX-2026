import { Timestamp } from "firebase/firestore";

export type Product = {
  name: string;
  brand: string;
  price: number;
  mrp?: number;
  discount: number;
  category: string;
  instock: boolean;
  description: string;
  createdAt: Timestamp;
  id: string;
};


