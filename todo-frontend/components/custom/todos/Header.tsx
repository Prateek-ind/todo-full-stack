"use client";
import { useState } from "react";
import { Button } from "../../ui/button";
import NewTask from "./task/NewTask";
import { logout } from "@/lib/api/Auth";
import { useRouter } from "next/navigation";

const Header = ({ date }: { date?: Date }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLogout = async () => {
   try{
    await logout();
    router.push("/");
   }catch(error) {
    console.error("Logout failed:", error);
   }
  }

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
        onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <NewTask date={date} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
