require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const todoRoutes = require("../Routes/todo.routes");
const userRoutes = require("../Routes/user.routes");
const protect = require("../middlewares/protect.middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.set("trust proxy", 1);

const allowedOrigins = ["http://localhost:3000", process.env.FRONTEND_URL];

app.use(
  cors({
    origin: allowedOrigins[0],
    credentials: true,
  }),
);


app.use("/api/todos", protect, todoRoutes);

app.use("/api/auth", userRoutes);

module.exports = app;
