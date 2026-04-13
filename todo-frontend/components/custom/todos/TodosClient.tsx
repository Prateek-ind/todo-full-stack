"use client";

import { useState, useEffect } from "react";
import TasksList from "./TasksList";
import Sidebar from "./Sidebar";
import CalendersContainer from "../CalendersContainer";
import NewTask from "./task/NewTask";
import { useAuth } from "@/components/providers/AuthProvider";

const TodosClient = () => {
  const [filter, setFilter] = useState<"pending" | "completed">("pending");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const {username}=useAuth()

  useEffect(() => {
    setDate(new Date());
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <p className="px-6 text-xl font-bold text-gray-900 dark:text-white">Welcome, {username}</p>
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
       
        <div className="col-span-1 md:contents flex flex-col gap-6">
         
          <div className="md:order-1">
            <Sidebar filter={filter} setFilter={setFilter} />
          </div>

          
          <div className="md:order-3">
            <CalendersContainer date={date} setDate={setDate} />
          </div>
        </div>

        {/* Right column on mobile: TasksList */}
        <div className="col-span-1 md:col-span-2 md:order-2">
          <TasksList
            openNewTaskModel={handleOpen}
            filter={filter}
            date={date}
          />
        </div>
      </div>
      <NewTask date={date} open={open} setOpen={setOpen} />
    </>
  );
  <NewTask date={date} open={open} setOpen={setOpen} />;
};

export default TodosClient;
