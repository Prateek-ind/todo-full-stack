import TaskCard from "./TaskCard";

const TasksList = () => {
  return (
    <div className="flex-1 overflow-y-auto space-y-3">
      {/* Task Card */}
      <TaskCard />

      <div className="text-center text-zinc-500 mt-10">
        No tasks yet. Start by creating one 🚀
      </div>
    </div>
  );
};

export default TasksList;
