import dbConnect from "../../../../configs/dbConnect";
import mongoose from "mongoose";
const User = mongoose.model("user");

export default async function userFetch(req, res) {
  const userIdFromAuth0 = req.body;
  await dbConnect();
  try {
    const userInfo = await User.find(userIdFromAuth0);
    res.status(200).json({ success: true, data: userInfo });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
