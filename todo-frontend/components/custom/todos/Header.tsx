"use client";
import { useState } from "react";
import { Button } from "../../ui/button";
import NewTask from "./task/NewTask";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className=" flex items-center justify-between mb-6">
      <h1 className="text-3xl font-semibold">My Tasks</h1>
      <div className="flex gap-4">
        <Button className="rounded-xl cursor-pointer" onClick={handleOpen}>
          + New Task
        </Button>
        <Button
          variant="outline"
          className="hover:text-red-500 hover:bg-red-50 rounded-xl cursor-pointer"
        >
          Logout
        </Button>
      </div>
      <NewTask open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
