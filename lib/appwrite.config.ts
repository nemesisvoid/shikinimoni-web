import * as sdk from 'node-appwrite';

const client = new sdk.Client();
export const { PROJECT_ID, DATABASE_ID, COLLECTION_ID, API_KEY, BUCKET_ID } = process.env;

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(process.env.PROJECT_ID!).setKey(process.env.API_KEY!);

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export { ID } from 'appwrite';
