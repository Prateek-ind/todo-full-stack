"use client";

import { Button } from "@/components/ui/button";
import { todoType } from "@/types/todoType";
import { useState } from "react";
import UpdateTask from "./UpdateTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "@/lib/api/Todo";

const TaskCard = ({ task }: { task: todoType }) => {
  const [edit, setEdit] = useState(false);
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

  return (
    <>
      <div className="group p-4 rounded-xl border flex items-center justify-between hover:shadow-sm transition">
        <div>
          <p className="font-medium text-lg group-hover:text-black dark:group-hover:text-white">
            {task.title}
          </p>
          <p className="text-sm text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
            {task.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {!task.completed && (
            <div>
              <Button
                variant="secondary"
                className="border-zinc-200 cursor-pointer"
                onClick={handleMarkComplete}
              >
                Mark as complete
              </Button>
            </div>
          )}
          <div className="flex justify-between">
            {" "}
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <UpdateTask task={task} open={edit} setOpen={setEdit} />
    </>
  );
};

export default TaskCard;
