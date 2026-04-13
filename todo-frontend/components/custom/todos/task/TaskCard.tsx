"use client";

import { Button } from "@/components/ui/button";
import { todoType } from "@/types/todoType";
import { useState } from "react";
import UpdateTask from "./UpdateTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "@/lib/api/Todo";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { isPastDate } from "@/utils/isPastDate";
import { Badge } from "@/components/ui/badge";
import { MdWork } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TaskDetailsModal from "./TaskDetailsModal";

const TaskCard = ({ task }: { task: todoType }) => {
  const [edit, setEdit] = useState(false);
  const [openTaskDetails, setOpenTaskDetails] = useState(false)
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error deleting todo:", error);
    },
  });

  const markCompleteMutation = useMutation({
    mutationFn: (id: string) => updateTodo(id, { ...task, completed: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error("Error marking todo as complete:", error);
    },
  });

  const handleEdit = () => {
    setEdit(true);
  };
  const handleDelete = () => {
    deleteMutation.mutate(task._id);
  };
  const handleMarkComplete = () => {
    markCompleteMutation.mutate(task._id);
  };

  const isPast = isPastDate(task.date);

  return (
    <>
      <div className="group max-h-72 overflow-y-auto p-4 rounded-xl border flex items-start justify-between hover:shadow-sm transition"
      onClick={()=>setOpenTaskDetails(true)}
      >
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl text-zinc-900 dark:text-zinc-100">
            <span className="font-semibold text-zinc-600 dark:text-zinc-400 mr-1">
              Title:
            </span>
            {task.title}
          </p>

          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <span className="font-semibold text-zinc-500 dark:text-zinc-400">
              Description:
            </span>{" "}
            {task.description}
          </p>

          <p className="text-xs text-zinc-400">
            <span className="font-medium text-zinc-500">Created:</span>{" "}
            {new Date(task.date).toLocaleDateString()}
          </p>

          <p className="text-xs flex items-center gap-2">
            <span className="font-medium text-zinc-500">Priority:</span>

            <Badge
              className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide
                          ${
                            task.priority === "high"
                              ? "py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                              : task.priority === "medium"
                                ? "py-1 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                                : "py-1 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          }`}
            >
              {task.priority}
            </Badge>
          </p>

          <p className="text-xs flex items-center gap-2">
            <span className="font-medium text-zinc-500">Priority:</span>

            <Badge
              variant="secondary"
              className={`px-2 py-0.5 rounded-full text-xs bg-zinc-200 dark:bg-zinc-700 font-semibold uppercase tracking-wide`}
            >
              {task.category === "work" ? (
                <MdWork />
              ) : task.category === "personal" ? (
                <IoPerson />
              ) : task.category === "shopping" ? (
                <AiOutlineShoppingCart />
              ) : null}{" "}
              {task.category}
            </Badge>
          </p>

          {!task.completed && <p className="text-xs flex items-center gap-2">
            <span className="font-medium text-zinc-500">Status: </span>

            <Badge
              className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide
                          ${
                            task.completed === false
                              ? "py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                              : null
                          }`}
            >
              {task.completed === false ? "Pending" : "Completed"}
            </Badge>
          </p>}

          {!task.completed && (
            <div className="mt-4 flex gap-4">
              <Switch
                id="mark-complete"
                onClick={handleMarkComplete}
                disabled={isPast}
              />
              <Label className="text-sm text-zinc-600 dark:text-zinc-300">
                Mark as Complete
              </Label>
            </div>
          )}
          {task.completed && (
            <div className="mt-4 flex items-center gap-4">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <Label className="text-sm text-zinc-500  dark:text-white">
                Completed
              </Label>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {!task.completed && (
            <div className="flex items-center gap-2">
              {" "}
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer"
                onClick={handleEdit}
                disabled={isPast}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="cursor-pointer"
                onClick={handleDelete}
                disabled={isPast}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
      <UpdateTask task={task} open={edit} setOpen={setEdit} />
      <TaskDetailsModal task={task} open={openTaskDetails} setOpen={setOpenTaskDetails}/>
    </>
  );
};

export default TaskCard;
