import dbConnect from "../../../../../configs/dbConnect";
import Job from "../../../../../models/Job.model";

export default async function jobHandler(req, res) {
  const {
    jobTitle,
    companyName,
    companyUrl,
    jobLocation,
    jobListingUrl,
    salary,
    notes,
    status,
    id,
  } = req.body;
  await dbConnect();
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: id },
      {
        jobTitle,
        companyName,
        companyUrl,
        jobLocation,
        jobListingUrl,
        salary,
        notes,
        status,
      },
      { new: true }
    );
    res.status(201).json({ success: true, data: updatedJob });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
}
