'use server';

import { COLLECTION_ID, DATABASE_ID, database } from '@/lib/appwrite.config';
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

export const searchProperties = async (search: string) => {
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

export const getPropertiesForRent = async () => {
  try {
    const properties = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [Query.contains('model', ['rent'])]);
    console.log(properties);
    return properties.documents;
  } catch (error) {
    console.error(error);
  }
};

export const getPropertiesForSale = async () => {
  try {
    const properties = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [Query.contains('model', ['sale'])]);
    console.log(properties.documents);
    return properties.documents;
  } catch (error) {
    console.error(error);
  }
};
