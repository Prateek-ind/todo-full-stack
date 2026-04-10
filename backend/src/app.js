require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const todoRoutes = require("../Routes/todo.routes");
const userRoutes = require("../Routes/user.routes");
const protect = require("../middlewares/protect.middleware");

const app = express();

const allowedOrigins = [
  "https://todo-full-stack-alpha.vercel.app",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`CORS blocked origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// Logging middleware for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  console.log("Cookies received:", req.cookies);
  next();
});

app.use("/api/todos", protect, todoRoutes);

app.use("/api/auth", userRoutes);

module.exports = app;
