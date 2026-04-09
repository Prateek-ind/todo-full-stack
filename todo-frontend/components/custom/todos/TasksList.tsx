"use client";

import { useQuery } from "@tanstack/react-query";
import TaskCard from "./task/TaskCard";
import { getTodos } from "@/lib/api/Todo";
import { todoType } from "@/types/todoType";
import SearchBar from "./SearchBar";
import { useMemo, useState } from "react";
import { PriorityFilter } from "./PriorityFilter";

type Props = {
  filter: "pending" | "completed";
  date?: Date;
};

const TasksList = ({ filter, date }: Props) => {
  const [priorityFilter, setPriorityFilter] = useState<
    "all" | "high" | "medium" | "low"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredData = useMemo(() => {
    return data
      .filter((task: todoType) =>
        filter === "pending" ? !task.completed : task.completed,
      )
      .filter((task: todoType) => {
        if (!searchQuery.trim()) return true;
        return task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase());
      })
      .filter((task: todoType) => {
        if(searchQuery.trim()) return true;
        if (!date) return true;

        const taskDate = new Date(task.date);
        return taskDate.toDateString() === date.toDateString();
      })
      .filter((task: todoType) => {
        if (priorityFilter === "all") return true;
        return task.priority.toLowerCase() === priorityFilter;
      });
  }, [data, filter, date, priorityFilter, searchQuery]);

  let content;

  if (isLoading) {
    content = (
      <div className="col-span-2 text-center text-zinc-500 mt-10">
        Loading tasks...
      </div>
    );
  }

  if (isError) {
    content = (
      <div className="col-span-2 text-center text-red-500 mt-10">
        Error loading tasks: {(error as Error).message}
      </div>
    );
  }

  if (data.length === 0) {
    content = (
      <div className="col-span-2 text-center text-zinc-500 mt-10">
        No tasks yet. Start by creating one.
      </div>
    );
  }

  if (filteredData.length === 0) {
    content = (
      <div className="col-span-2 text-center text-zinc-500 mt-10">
        No {filter} tasks{" "}
        {date ? `for selected date with ${priorityFilter} priority` : ""}.
      </div>
    );
  }

  return (
    <div className=" col-span-2 flex-1 overflow-y-auto space-y-3">
      <div className="flex items-center justify-between my-4 px-2 gap-2">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-500 dark:text-white">
            Filter:{" "}
          </span>
          <PriorityFilter
            priority={priorityFilter}
            onPriorityChange={setPriorityFilter}
          />
        </div>
      </div>
      {content}
      {filteredData.map((task: todoType) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
