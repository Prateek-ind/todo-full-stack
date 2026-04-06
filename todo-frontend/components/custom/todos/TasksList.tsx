"use client";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "./task/TaskCard";
import { getTodos } from "@/lib/api/Todo";
import { todoType } from "@/types/todoType";

type Props = {
  filter: "pending" | "completed";
  date?: Date | undefined;
};

const TasksList = ({ filter, date }: Props) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos", date],
    queryFn: async () => {
      return await getTodos();
    },
    retry: false,
  });
  let content;

  if (isLoading) {
    content = (
      <div className="text-center text-zinc-500 mt-10">Loading tasks...</div>
    );
  } else if (isError) {
    content = (
      <div className="text-center text-red-500 mt-10">
        Error loading tasks: {(error as Error).message}
      </div>
    );
  } else if (!data || data.length === 0) {
    content = (
      <div className="text-center text-zinc-500 mt-10">
        No {filter} tasks yet. Start by creating one.
      </div>
    );
  } else {
    const filteredData = data
      .filter((task: todoType) =>
        filter === "pending" ? !task.completed : task.completed,
      )
      .filter((task: todoType) => {
        if (!date) return true;
        const taskDate = new Date(task.date);
        return taskDate.toDateString() === date.toDateString();
      });

    if (filteredData.length === 0) {
      content = (
        <div className="text-center text-zinc-500 mt-10">
          No {filter} tasks.
        </div>
      );
    } else {
      content = filteredData.map((task: todoType) => (
        <TaskCard key={task._id} task={task} />
      ));
    }
  }
  return (
    <div className="col-span-2 flex-1 overflow-y-auto space-y-3">{content}</div>
  );
};

export default TasksList;
