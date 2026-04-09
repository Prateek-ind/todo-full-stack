const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
  },
  { timestamps: true },
);

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
