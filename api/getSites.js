import { connectToDatabase } from "../lib/mongodb";

export default async (req, res) => {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const results = await collection.find({}).toArray();

  res.status(200).json(results);
};
