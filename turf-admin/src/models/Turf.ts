import mongoose from "mongoose";

const TurfSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    turfLocation: { type: String, required: true },
    turfPrice: { type: Number, required: true },
    turfType: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    turfAvailability: { type: Boolean, default: true },
    closeTime: { type: Date, required: true },
    openTime: { type: Date, required: true },
    // image: { type: String },
    // description: { type: String },
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, required: true, default: new Date() },
  },
  { timestamps: true }
);

const Turf = mongoose.models.turfs || mongoose.model("turfs", TurfSchema);

export default Turf;
