"use client";

import { useQuery } from "@tanstack/react-query";
import TaskCard from "./task/TaskCard";
import { getTodos } from "@/lib/api/Todo";
import { todoType } from "@/types/todoType";

type Props = {
  filter: "pending" | "completed";
  date?: Date;
};

const TasksList = ({ filter, date }: Props) => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="col-span-2 text-center text-zinc-500 mt-10">Loading tasks...</div>
    );
  }

  if (isError) {
    return (
      <div className="col-span-2 text-center text-red-500 mt-10">
        Error loading tasks: {(error as Error).message}
      </div>
    );
  }

  const filteredData = data
    .filter((task: todoType) =>
      filter === "pending" ? !task.completed : task.completed,
    )
    .filter((task: todoType) => {
      if (!date) return true;

      const taskDate = new Date(task.date);
      return taskDate.toDateString() === date.toDateString();
    });

  if (data.length === 0) {
    return (
      <div className="col-span-2 text-center text-zinc-500 mt-10">
        No tasks yet. Start by creating one 🚀
      </div>
    );
  }

  if (filteredData.length === 0) {
    return (
      <div className="col-span-2 text-center text-zinc-500 mt-10">
        No {filter} tasks {date ? "for selected date" : ""}.
      </div>
    );
  }

  return (
    <div className=" col-span-2 flex-1 overflow-y-auto space-y-3">
      {filteredData.map((task: todoType) => (
        <TaskCard key={task._id} task={task} date={date} />
      ))}
    </div>
  );
};

export default TasksList;
