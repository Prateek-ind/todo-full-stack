require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const todoRoutes = require("../Routes/todo.routes");
const userRoutes = require("../Routes/user.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/todos", todoRoutes);

app.use("/api/users", userRoutes);

module.exports = app;
