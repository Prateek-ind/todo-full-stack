"use client";

import { Dispatch, SetStateAction } from "react";

type Props = {
  filter: "pending" | "completed";
  setFilter: Dispatch<SetStateAction<"pending" | "completed">>;
};

const Sidebar = ({ filter, setFilter }: Props) => {
  return (
    <div className="max-w-64 max-h-fit md:max-h-screen bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-sm flex flex-col gap-4">
      <h2 className="text-lg font-medium">Overview</h2>

      <div className="flex flex-col gap-3">
        <div
          onClick={() => setFilter("pending")}
          className={`p-3 rounded-xl cursor-pointer transition ${
            filter === "pending"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-zinc-100 dark:bg-zinc-700 hover:opacity-80"
          }`}
        >
          Pending Tasks
        </div>
        <div
          onClick={() => setFilter("completed")}
          className={`p-3 rounded-xl cursor-pointer transition ${
            filter === "completed"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-zinc-100 dark:bg-zinc-700 hover:opacity-80"
          }`}
        >
          Completed Tasks
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
