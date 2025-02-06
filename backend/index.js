import express from "express";
import "dotenv/config";
import cors from "cors";
import enquiryRoute from "./routes/enquiryRoute.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: ["http://localhost:5173/", "http://localhost:5173"],
  })
);

app.use(express.json());

app.use("/api/v1/enquiry", enquiryRoute);

app.get("/server-health", (req, res) => {
  res.status(200).json({ message: "System is running successfully." });
});

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database connection successful.");
  } catch (error) {
    console.log(error);
    return;
  }
}

app.listen(PORT, async () => {
  await connectToDB();
  console.log("Server is listening on port:" + PORT);
});
