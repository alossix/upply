import mongoose from "mongoose";
import dbConnect from "../../../configs/dbConnect";
import Job from "../../../models/Job.model";

export default async function jobHandler(req, res) {
  await dbConnect();
  try {
    console.log(`inside api job try`);
    console.log(req.body);
    const newJob = await Job.findOneAndUpdate(
      req.body.userIdFromAuth0,
      {
        $set: {
          userIdFromAuth0: req.body.userIdFromAuth0,
          jobTitle: req.body.jobTitle,
          companyName: req.body.companyName,
        },
      },
      {
        returnOriginal: false,
        upsert: true,
      }
    );
    await console.log(newJob);
    res.status(201).json({ success: true, data: newJob });
  } catch (err) {
    console.log(`inside api job catch`);
    res.status(400).json({ success: false });
  }
}
