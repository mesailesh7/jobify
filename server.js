import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routes
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandleMiddleware from "./middleware/error-handler.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome sunny");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
