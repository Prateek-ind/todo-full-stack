"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createTodo, updateTodo } from "@/lib/api/Todo";
import { todoType } from "@/types/todoType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  initialData?: todoType;
  isEdit?: boolean;
  setOpen: (open: boolean) => void;
};

const TaskForm = ({ initialData, isEdit, setOpen }: Props) => {
  const queryClient = useQueryClient();
 

 
   const [formData, setFormData] = useState<todoType>({
    _id: initialData?._id || "",
    title: initialData?.title || "",
    description: initialData?.description || "",
    completed: initialData?.completed || false,
  });

  const mutation = useMutation({
    mutationFn: async (data: todoType) => {
      return isEdit ? await updateTodo(data._id, data) : await createTodo(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setOpen(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData as todoType);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Task title"
          value={formData.title}
          className="mb-4"
          onChange={handleChange}
        />
        <Textarea
          name="description"
          placeholder="Task description"
          className="mb-4"
          value={formData.description}
          onChange={handleChange}
        />
        <Button
          type="submit"
          disabled={mutation.isPending}
          className="bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:scale-105 px-4 py-2 rounded-lg cursor-pointer"
        >
          {mutation.isPending
            ? isEdit
              ? "Updating..."
              : "Creating..."
            : isEdit
              ? "Update Task"
              : "Create Task"}
        </Button>
      </form>
    </>
  );
};

export default TaskForm;
