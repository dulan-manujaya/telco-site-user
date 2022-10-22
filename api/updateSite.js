import { connectToDatabase } from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  const { database } = await connectToDatabase();
  const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

  const _id = req.body._id;
  delete req.body._id;

  const results = await collection.updateOne(
    { _id: new ObjectId(_id) },
    { $set: req.body }
  );

  res.status(200).json(results);
};
