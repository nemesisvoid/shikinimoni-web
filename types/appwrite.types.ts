import { Models } from 'node-appwrite';

export interface PropertyType extends Models.Document {
  name: string;
  location: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  model: string;
  images: Array<string>;
}
