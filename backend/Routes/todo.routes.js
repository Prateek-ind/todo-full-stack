const express = require("express");
const router = express.Router();
const {CreateTodo, GetTodo, EditTodo, DeleteTodo} = require("../controllers/todo.controller")


 
router.post("/create", CreateTodo);


 
router.get("/", GetTodo);

 
router.patch("/:id", EditTodo);

 
router.delete("/:id", DeleteTodo);

module.exports = router;