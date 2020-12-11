import mongoose from "mongoose";
import dbConnect from "../../../configs/dbConnect";
import User from "../../../models/User.model";

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
        upsert: true,
      }
    );
    await console.log(newUser);
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}
