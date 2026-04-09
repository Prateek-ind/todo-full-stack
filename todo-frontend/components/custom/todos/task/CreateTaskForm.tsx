"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createTodo } from "@/lib/api/Todo";
import { todoType } from "@/types/todoType";
import { formatDate } from "@/utils/formatDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import PrioritySelect from "./PrioritySelect";

type Props = {
  setOpen: (open: boolean) => void;
  selectedDate?: Date;
};

const CreateTaskForm = ({  setOpen, selectedDate }: Props) => {
  const queryClient = useQueryClient();

  const formattedDate = formatDate(selectedDate || new Date());

  const [formData, setFormData] = useState<todoType>({
    _id:  "",
    title:  "",
    description:  "",
    completed:  false,
    date:  formattedDate,
    priority: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: todoType) => {
      return await createTodo(data);
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

  const handlePriorityChange = (value: string) => {
    setFormData({
      ...formData,
      priority: value,
    });
    console.log(formData.priority)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedDate) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosenDate = new Date(selectedDate);
    chosenDate.setHours(0, 0, 0, 0);

    if (chosenDate < today) {
      alert("Please select a valid date");
      return;
    }
    console.log(formData);
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
        <PrioritySelect
          value={formData?.priority}
          onChange={handlePriorityChange}
        />
        <Button
          type="submit"
          disabled={mutation.isPending}
          className="bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:scale-105 px-4 py-2 rounded-lg cursor-pointer"
        >
          {mutation.isPending ? "Creating..." : "Create Task"}
        </Button>
      </form>
    </>
  );
};

export default CreateTaskForm;
