import dbConnect from "../../../configs/dbConnect";
import mongoose from "mongoose";
const Job = mongoose.model("job");

export default async function jobHandler(req, res) {
  await dbConnect();
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json({ success: true, data: newJob });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
