import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Connect to MongoDB using the MONGO_URI from the .env file
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/simple-build"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    // Exit process with failure
    process.exit(1);
  }
};
