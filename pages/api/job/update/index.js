import dbConnect from "../../../../configs/dbConnect";
import Job from "../../../../models/Job.model";

export default async function jobHandler(req, res) {
  const { id, newBookmarkState } = req.body;
  await dbConnect();
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: id },
      {
        bookmarked: newBookmarkState,
      },
      { new: true }
    );
    res.status(201).json({ success: true, data: updatedJob });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
}
