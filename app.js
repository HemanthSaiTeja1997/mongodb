require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middlewares/logger");
const globalErrorHandler = require("./middlewares/errorHandling");
const express = require("express");
const app = express();
app.use(express.json());
app.use(logger);
app.use(globalErrorHandler);

const port = 3030;
connectDB();

app.use("/", userRoutes);
app.listen(port, () => {
  console.log(` Api listening at http://localhost:${port}`);
});
