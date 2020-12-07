import mongoose from "mongoose";

export default function dbConnect() {
  mongoose
    .connect(
      "mongodb+srv://upply:oWJcIdA3oj5uFeMx@cluster0.6mtgd.mongodb.net/upply?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    )
    .then((db) => console.log(`Running on db: ${db.connections[0].name}`))
    .catch((err) => console.error(`${err}`));
}
