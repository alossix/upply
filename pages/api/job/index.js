import dbConnect from "../../../configs/dbConnect";
import Job from "../../../models/Job.model";

export default async function jobHandler(req, res) {
  await dbConnect();
  console.log(req.body);
  const job = await Job.create(req.body);
  res.status(201).json({ success: true, data: job });
}
