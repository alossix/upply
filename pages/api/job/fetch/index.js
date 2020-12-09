import mongoose from "mongoose";
import dbConnect from "../../../../configs/dbConnect";
import Job from "../../../../models/Job.model";

export default async function jobFetch(req, res) {
  const userIdFromAuth0 = req.body;
  await dbConnect();
  try {
    console.log(req.body);
    const jobInfo = await Job.find(userIdFromAuth0);
    res.status(200).json({ success: true, data: jobInfo });
  } catch (err) {
    console.log(`inside api job fetch catch`);
    res.status(400).json({ success: false });
  }
}
