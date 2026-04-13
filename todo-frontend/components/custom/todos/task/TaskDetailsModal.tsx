import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { todoType } from "@/types/todoType";
import { Badge } from "@/components/ui/badge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { MdWork } from "react-icons/md";


type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  task: todoType;
};

const TaskDetailsModal = ({ open, setOpen, task }: Props) => {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-xl [&>button]:cursor-pointer [&>button]:hover:opacity-70">
          <DialogHeader>
            <DialogTitle className="text-3xl text-zinc-900 dark:white">
              <p className="font-bold text-xl text-zinc-900 dark:text-zinc-100">
                <span className="font-semibold text-zinc-600 dark:text-zinc-400 mr-1">
                  Title:
                </span>
                {task.title}
              </p>
            </DialogTitle>
            <DialogDescription >
              <div className="space-y-6">
                <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                  Description:
                </span>{" "}
                {task.description}
                <p className="mb-2 text-xs text-zinc-400">
                  <span className="font-medium text-zinc-500">Created:</span>{" "}
                  {new Date(task.date).toLocaleDateString()}
                </p>
                <p className="mb-2 text-xs flex items-center gap-2">
                  <span className="font-medium text-zinc-500">Priority:</span>

                  <Badge
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide
                          ${
                            task.priority === "high"
                              ? "py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                              : task.priority === "medium"
                                ? "py-1 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                                : "py-1 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          }`}
                  >
                    {task.priority}
                  </Badge>
                </p>
                <p className="mb-2 text-xs flex items-center gap-2">
                  <span className="font-medium text-zinc-500">Priority:</span>

                  <Badge
                    variant="secondary"
                    className={`px-2 py-0.5 rounded-full text-xs bg-zinc-200 dark:bg-zinc-700 font-semibold uppercase tracking-wide`}
                  >
                    {task.category === "work" ? (
                      <MdWork />
                    ) : task.category === "personal" ? (
                      <IoPerson />
                    ) : task.category === "shopping" ? (
                      <AiOutlineShoppingCart />
                    ) : null}{" "}
                    {task.category}
                  </Badge>
                </p>
                {!task.completed && (
                  <p className="mb-2 text-xs flex items-center gap-2">
                    <span className="font-medium text-zinc-500">Status: </span>

                    <Badge
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide
                          ${
                            task.completed === false
                              ? "py-1 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                              : null
                          }`}
                    >
                      {task.completed === false ? "Pending" : "Completed"}
                    </Badge>
                  </p>
                )}
              </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskDetailsModal;
