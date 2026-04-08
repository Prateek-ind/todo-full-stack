"use client";

import { Button } from "@/components/ui/button";
import { todoType } from "@/types/todoType";
import { useState } from "react";
import UpdateTask from "./UpdateTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "@/lib/api/Todo";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const TaskCard = ({ task, date }: { task: todoType; date?: Date }) => {
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

  const isValid = date ? new Date(task.date) === date : true

  return (
    <>
      <div className="group p-4 rounded-xl border flex items-center justify-between hover:shadow-sm transition">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-lg group-hover:text-black dark:group-hover:text-white">
            {task.title}
          </p>
          <p className="text-sm text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
            {task.description}
          </p>
          {!task.completed && (
            <div className="mt-4 flex gap-4">
              <Switch id="mark-complete" onClick={handleMarkComplete} disabled={!isValid} />
              <Label htmlFor="mark-complete">Mark as Complete</Label>
            </div>
          )}
          {task.completed && (
            <div className="mt-4 flex gap-4">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <Label htmlFor="mark-complete" className="text-zinc-500">
                Completed
              </Label>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {!task.completed && (
            <div className="flex justify-between gap-2">
              {" "}
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer"
                onClick={handleEdit}
                disabled={isValid}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="cursor-pointer"
                onClick={handleDelete}
                disabled={isValid}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
      <UpdateTask task={task} open={edit} setOpen={setEdit} />
    </>
  );
};

export default TaskCard;
