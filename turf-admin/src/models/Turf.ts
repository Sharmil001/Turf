import mongoose from "mongoose";

const TurfSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Turf || mongoose.model("Turf", TurfSchema);
