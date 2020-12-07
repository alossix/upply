import dbConnect from "../../../configs/dbConnect";
import Test from "../../../models/TestModel";

export default async function testHandler(req, res) {
  const { method } = req;

  await dbConnect();
  console.log(req.body);
  const test = await Test.create(req.body);
  res.status(201).json({ success: true, data: test });
}
