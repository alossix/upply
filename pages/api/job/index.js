import dbConnect from "../../../configs/dbConnect";
import mongoose from "mongoose";
const Job = mongoose.model("job");

export default async function jobHandler(req, res) {
  const { method } = req;

  await dbConnect();

  await console.log(req.body);

  if (method === "GET") {
    try {
      const jobInfo = await Job.findOne({});
      res.status(200).json({ success: true, data: jobInfo });
    } catch {
      (err) => res.status(400).json({ success: false });
    }
  } else {
    try {
      const newJob = await Job.create(req.body);
      res.status(201).json({ success: true, data: newJob });
    } catch {
      (err) => res.status(400).json({ success: false });
    }
  }
}
