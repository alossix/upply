import dbConnect from "../../../configs/dbConnect";
import User from "../../../models/User.model";

export default async function userHandler(req, res) {
  const { method } = req;

  await dbConnect();

  console.log(req.body);

  if (method === "GET") {
    try {
      const userInfo = await User.findOne({});
      res.status(200).json({ success: true, data: userInfo });
    } catch {
      (err) => res.status(400).json({ success: false });
    }
  } else {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({ success: true, data: newUser });
    } catch {
      (err) => res.status(400).json({ success: false });
    }
  }
}
