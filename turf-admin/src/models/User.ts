import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
