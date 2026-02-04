import { MongoClient } from "mongodb";

const uri = "mongodb+srv://backend_user:backend123@asik3.8hbozps.mongodb.net/online_store?retryWrites=true&w=majority&appName=asik3";

const client = new MongoClient(uri);

await client.connect();

export const db = client.db("online_store");
