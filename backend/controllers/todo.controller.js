const todoModel = require("../model/todoModel");


const CreateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const newTodo = await todoModel.create({
      title,
      description,
    });

    res.status(201).json({
      message: "Todo created",
      todo: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create todo",
    });
  }
}

const GetTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();

    res.status(200).json({
      message: "Todo list",
      todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch todos",
    });
  }
}

const EditTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo updated",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo",
    });
  }
}

const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await todoModel.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
}

module.exports = {CreateTodo, GetTodos, EditTodo, DeleteTodo}