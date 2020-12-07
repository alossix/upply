import dbConnect from "../../../configs/dbConnect";
import User from "../../../models/User.model";

export default async function userHandler(req, res) {
  await dbConnect();
  console.log(req.body);
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
}
