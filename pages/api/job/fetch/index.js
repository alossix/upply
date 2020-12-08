import dbConnect from "../../../../configs/dbConnect";
import mongoose from "mongoose";
const Job = mongoose.model("job");

export default async function jobFetch(req, res) {
  const userIdFromAuth0 = req.body;
  await dbConnect();
  try {
    const jobInfo = await Job.find(userIdFromAuth0);
    res.status(200).json({ success: true, data: jobInfo });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
