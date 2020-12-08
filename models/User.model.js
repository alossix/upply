import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userIdFromAuth0: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  jobStack: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
