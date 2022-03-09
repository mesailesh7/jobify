import express from "express";
const app = express();

// middleware
import notFoundMiddleware from "./middleware/not-found.js";

app.get("/", (req, res) => {
  res.send("Welcome sunny");
});

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
