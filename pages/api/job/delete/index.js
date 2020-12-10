import dbConnect from "../../../../configs/dbConnect";
import Job from "../../../../models/Job.model";

export default async function jobDelete(req, res) {
  const { id } = req.body;
  await dbConnect();
  try {
    const deleteJob = await Job.deleteOne({ _id: id });
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
}
