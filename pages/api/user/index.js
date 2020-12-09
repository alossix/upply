import dbConnect from "../../../configs/dbConnect";
import mongoose from "mongoose";
const User = mongoose.model("user");

export default async function userHandler(req, res) {
  await dbConnect();
  try {
    const newUser = await User.findOneAndUpdate(
      req.body.userIdFromAuth0,
      {
        $set: { firstName: req.body.firstName, lastName: req.body.lastName },
      },
      {
        returnOriginal: false,
      }
    );
    await console.log(newUser);
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
