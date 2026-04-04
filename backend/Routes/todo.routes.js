const express = require("express");
const router = express.Router();
const {CreateTodo, GetTodos, EditTodo, DeleteTodo} = require("../controllers/todo.controller")


 
router.post("/create", CreateTodo);


 
router.get("/", GetTodos);

 
router.patch("/:id", EditTodo);

 
router.delete("/:id", DeleteTodo);

module.exports = router;