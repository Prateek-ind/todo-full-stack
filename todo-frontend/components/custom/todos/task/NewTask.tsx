"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import NewTaskForm from "./TaskForm";

type NewTaskProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const NewTask = ({ open, setOpen }: NewTaskProps) => {
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
          <NewTaskForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewTask;
