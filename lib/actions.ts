'use server';

import { PROJECT_ID, BUCKET_ID, COLLECTION_ID, DATABASE_ID, database, storage } from '@/lib/appwrite.config';
import { PropertyType } from '@/types/appwrite.types';
import { Query } from 'node-appwrite';

export const getProperties = async () => {
  try {
    const properties = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!);
    return properties.documents;
  } catch (err) {
    console.error(err);
  }
};

export const searchProperties = async search => {
  if (!search) return [];
  try {
    const searchedProperties = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [Query.equal('name', search)]);
    console.log(searchedProperties.documents);
    return searchedProperties.documents;
  } catch (err) {
    console.error(err);
  }
};

export const getProperty = async (id: string): Promise<PropertyType | undefined> => {
  try {
    if (!id) throw new Error('Could not find');
    const property = await database.getDocument(DATABASE_ID!, COLLECTION_ID!, id);
    return property as PropertyType;
  } catch (err) {
    console.error(err);
  }
};

export const getImages = async (id: string) => {
  if (!id) return;
  try {
    const images = await storage.getFileView(BUCKET_ID!, id);
    return images;
  } catch (error) {
    console.error(error);
  }
};