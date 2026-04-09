"use client";
import dynamic from "next/dynamic";
import { getTodos } from "@/lib/api/Todo";
import { todoType } from "@/types/todoType";
import { formatDate } from "@/utils/formatDate";
import { generateCurrentMonthDates } from "@/utils/generateCurrentMonthDates";
import { useQuery } from "@tanstack/react-query";

const ActivityCalendar = dynamic(() => import("react-activity-calendar").then(
      (mod) => mod.ActivityCalendar
    ), {
  ssr: false,
});

type Props = {
  date?: Date;
  setDate?: (date: Date) => void;
};

export default function HeatCalendar({ setDate }: Props) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const countMap = data.reduce(
    (acc: Record<string, number>, todo: todoType) => {
      const d = new Date(todo.date);
      const formattedDate = formatDate(d);
      acc[formattedDate] = (acc[formattedDate] || 0) + 1;
      return acc;
    },
    {},
  );

  const allDates = generateCurrentMonthDates();

  const heatMap = allDates.map((date) => {
    const count = countMap[date] || 0;

    return {
      date,
      count,
      level:
        count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4,
    };
  });

  const handleDateClick = (dateString: string) => {
    const clickedDate = new Date(dateString);
    if (setDate) {
      setDate(clickedDate);
    }
  };

  return (
    <ActivityCalendar
      data={heatMap}
      loading={isLoading}
      colorScheme="light"
      renderBlock={(block, activity) => {
        return (
          <rect
            {...block.props}
            onClick={() => handleDateClick(activity.date)}
            className="cursor-pointer"
          />
        );
      }}
    />
  );
}
