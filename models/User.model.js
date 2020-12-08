const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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

export default mongoose.models.User || mongoose.model("User", UserSchema);
