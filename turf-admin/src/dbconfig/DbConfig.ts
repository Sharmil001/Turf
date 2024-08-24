import mongoose from "mongoose";

const connect_url: string =
  process.env.MONGODB_CONNECTION || "mongodb://127.0.0.1:27017/TurfDb";

export async function connectDb() {
  try {
    await mongoose.connect(connect_url);
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}
