import dbConnect from "../../../configs/dbConnect";
import Job from "../../../models/Job.model";

export default async function jobHandler(req, res) {
  const { method } = req;
  await dbConnect();
  console.log(req.body);
  const newJob = await Job.create(req.body);
  res.status(201).json({ success: true, data: newJob });
}
