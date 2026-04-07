"use client";

import { useState } from "react";
import Header from "./Header";
import TasksList from "./TasksList";
import TodosSidebar from "./Sidebar";
import CalendersContainer from "../CalendersContainer";

const TodosClient = () => {
  const [filter, setFilter] = useState<"pending" | "completed">("pending");
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Header date={date}/>

      <div className="grid grid-cols-4 gap-6 h-[calc(100%-80px)]">
        <TodosSidebar filter={filter} setFilter={setFilter} />
        <TasksList filter={filter} date={date} />
        <CalendersContainer date={date} setDate={setDate} />
      </div>
    </>
  );
};

export default TodosClient;
