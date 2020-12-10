import mongoose from "mongoose";
// const connection = {};

async function dbConnect() {
  const db = await mongoose.connect(
    "mongodb+srv://upply:oWJcIdA3oj5uFeMx@cluster0.6mtgd.mongodb.net/upply?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
}

export default dbConnect;
