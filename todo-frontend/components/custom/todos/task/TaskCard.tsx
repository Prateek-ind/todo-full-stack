"use client"

import { Button } from "@/components/ui/button";
import { todoType } from "@/types/todoType";
import { useState } from "react";
import UpdateTask from "./UpdateTask";


const TaskCard = ({ task }: { task: todoType }) => {
  const [edit, setEdit] = useState(false);


  const handleEdit = () => {
    setEdit(true);
  }

  return (
    <>
    <div className="group p-4 rounded-xl border flex items-center justify-between hover:shadow-sm transition">
      <div>
        <p className="font-medium text-lg group-hover:text-black dark:group-hover:text-white">
          {task.title}
        </p>
        <p className="text-sm text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
          {task.description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {!task.completed && <div>
          <Button variant="secondary" className="border-zinc-200 cursor-pointer">
            Mark as complete
          </Button>
        </div>}
        <div className="flex justify-between">
          {" "}
          <Button variant="outline" size="sm" className="cursor-pointer"
          onClick={handleEdit}
          >
            Edit
          </Button>
          <Button variant="destructive" size="sm" className="cursor-pointer">
            Delete
          </Button>
        </div>
      </div>
    </div>
    <UpdateTask task={task} open={edit} setOpen={setEdit} />
    </>
  );
};

export default TaskCard;
