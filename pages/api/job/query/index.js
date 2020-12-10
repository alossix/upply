import dbConnect from "../../../../configs/dbConnect";
import Job from "../../../../models/Job.model";

export default async function jobFetch(req, res) {
  const { id } = req.body;
  await dbConnect();
  try {
    const jobInfo = await Job.findOne({ _id: id });
    res.status(200).json({ success: true, data: jobInfo });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
}
