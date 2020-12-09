import mongoose from "mongoose";
import dbConnect from "../../../../configs/dbConnect";
import User from "../../../../models/User.model";

export default async function userFetch(req, res) {
  const userIdFromAuth0 = req.body;
  await dbConnect();
  try {
    console.log(`inside api user fetch`);
    const userInfo = await User.find(userIdFromAuth0);
    res.status(200).json({ success: true, data: userInfo });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
