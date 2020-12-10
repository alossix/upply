import mongoose from "mongoose";
import dbConnect from "../../../../configs/dbConnect";
import Job from "../../../../models/Job.model";

export default async function jobFetch(req, res) {
  const { userIdFromAuth0 } = req.body;
  await dbConnect();
  try {
    const jobInfo = await Job.find({ userIdFromAuth0 });
    await console.log(jobInfo);
    res.status(200).json({ success: true, data: jobInfo });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
}
