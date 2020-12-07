import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Test || mongoose.model("Test", TestSchema);
