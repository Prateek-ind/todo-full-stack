require("dotenv").config();
const cors = require("cors")
const cookieParser = require("cookie-parser");
const express = require("express");
const todoRoutes = require("../Routes/todo.routes");
const userRoutes = require("../Routes/user.routes");

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());


app.use("/api/todos", todoRoutes);

app.use("/api/auth", userRoutes);

module.exports = app;
