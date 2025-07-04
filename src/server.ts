import "dotenv/config";
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;
const port = process.env.PORT || 5000;
const mongoUri = process.env.mongodb_uri as string;

async function main() {
  try {
    await mongoose.connect(mongoUri);
    console.log("✅ [Database] MongoDB connected successfully");

    server = app.listen(port, () => {
      console.log(`🚀 [Server] Listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ [Error] Failed to connect to MongoDB:", error);
  }
}

main();
