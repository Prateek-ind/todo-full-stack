"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import TasksList from "./TasksList";
import Sidebar from "./Sidebar";
import CalendersContainer from "../CalendersContainer";

const TodosClient = () => {
  const [filter, setFilter] = useState<"pending" | "completed">("pending");
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <>
      <Header date={date} />

      <div className="grid grid-cols-4 gap-6 h-[calc(100%-80px)]">
        <Sidebar filter={filter} setFilter={setFilter} />
        <TasksList filter={filter} date={date} />
        <CalendersContainer date={date} setDate={setDate} />
      </div>
    </>
  );
};

export default TodosClient;
