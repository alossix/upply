import mongoose from "mongoose";
import dbConnect from "../../../configs/dbConnect";
import Job from "../../../models/Job.model";

export default async function jobHandler(req, res) {
  await dbConnect();
  try {
    const newJob = await Job.create(req.body);
    res.status(201).json({ success: true, data: newJob });
  } catch (err) {
    console.log(`inside api job catch`);
    res.status(400).json({ success: false });
  }
}
