"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import NewTaskForm from "./CreateTaskForm";

type NewTaskProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  date?: Date;
};

const NewTask = ({ open, setOpen, date }: NewTaskProps) => {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="[&>button]:cursor-pointer">
          <DialogHeader>
            <DialogTitle>Create new task</DialogTitle>
            <DialogDescription>
              Add a task to stay organized and keep track of your work.
            </DialogDescription>
          </DialogHeader>
          <NewTaskForm selectedDate={date} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewTask;
