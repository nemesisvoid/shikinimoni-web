import * as sdk from 'node-appwrite';
import { Client, Storage } from 'appwrite';

const client = new sdk.Client();
const storageClient = new Client();
export const { PROJECT_ID, DATABASE_ID, COLLECTION_ID, API_KEY, BUCKET_ID } = process.env;

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(process.env.PROJECT_ID!).setKey(process.env.API_KEY!);

storageClient.setEndpoint('https://cloud.appwrite.io/v1').setProject(process.env.PROJECT_ID!).setProject('671593700018a40fa461');

export const database = new sdk.Databases(client);
export const storage = new Storage(storageClient);
export { ID } from 'appwrite';
