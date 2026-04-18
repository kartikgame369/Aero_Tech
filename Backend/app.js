import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/config/database.js"

dotenv.config()

const app = express()

connectDB()
  .then(() => {
    console.log("MongoDB database connected successfully");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on http://localhost:" + process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Database is not connected", error);
  });