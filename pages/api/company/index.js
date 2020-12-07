import dbConnect from "../../../configs/dbConnect";
import Company from "../../../models/Company.model";

export default async function companyHandler(req, res) {
  await dbConnect();
  console.log(req.body);
  const company = await Company.create(req.body);
  res.status(201).json({ success: true, data: company });
}
