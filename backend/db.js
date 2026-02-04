import { MongoClient } from "mongodb";

const uri = "YOUR_MONGODB_CONNECTION_STRING";
const client = new MongoClient(uri);

export const db = client.db("online_store");
