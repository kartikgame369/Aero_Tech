import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/config/database.js"
import AuthRouter from "./src/routes/auth.router.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use("/", AuthRouter)

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