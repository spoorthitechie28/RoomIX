import mongoose from "mongoose";
import dotenv from "dotenv";

import { User } from "./models/user.model.js";
import { Meeting } from "./models/meeting.model.js";

dotenv.config({ path: "../.env" });

const seed = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB Connected for seeding");

    // Clear existing data (optional)
    await User.deleteMany();
    await Meeting.deleteMany();

    // Insert Users
    const users = await User.insertMany([
      {
        name: "Spoorthi",
        username: "spoorthi123",
        password: "securePass1",
        token: "abc123token",
      },
      {
        name: "Ashish",
        username: "ashish321",
        password: "securePass2",
        token: "xyz456token",
      },
    ]);

    console.log("✅ Users seeded:", users);

    // Insert Meetings (linked to users)
    const meetings = await Meeting.insertMany([
      {
        user_id: users[0]._id, // directly use ObjectId
        meetingCode: "MEET001",
        date: new Date(),
      },
      {
        user_id: users[1]._id,
        meetingCode: "MEET002",
        date: new Date(),
      },
    ]);

    console.log("✅ Meetings seeded:", meetings);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

seed();
