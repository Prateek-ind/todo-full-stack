import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { todoType } from "@/types/todoType";
import EditTaskForm from "./EditTaskForm";

type Props = {
  task: todoType;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const UpdateTask = ({ task, open, setOpen }: Props) => {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="[&>button]:cursor-pointer">
          <DialogHeader>
            <DialogTitle>Update task</DialogTitle>
            <DialogDescription>
              Update your task to stay organized and keep track of your work.
            </DialogDescription>
          </DialogHeader>
          <EditTaskForm initialData={task} isEdit={true} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateTask;
