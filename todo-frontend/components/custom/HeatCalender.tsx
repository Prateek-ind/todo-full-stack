"use client";
import { getTodos } from "@/lib/api/Todo";
import { todoType } from "@/types/todoType";
import { formatDate } from "@/utils/formatDate";
import { generateCurrentMonthDates } from "@/utils/generateCurrentMonthDates";
import { useQuery } from "@tanstack/react-query";

import { ActivityCalendar } from "react-activity-calendar";

type Props = {
date?: Date;
setDate?: (date: Date) => void;
}

export default function HeatCalendar({date, setDate}: Props) {
  const { data = [], isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const countMap = data.reduce((acc: Record<string, number>, todo: todoType) => {
    const d = new Date(todo.date);
    const formattedDate = formatDate(d);
    acc[formattedDate] = (acc[formattedDate] || 0) + 1;
    return acc;
  }, {});

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


allDates.forEach((date) => {
  if (countMap[date]) {
    console.log("MATCH FOUND:", date);
  }
});

  if (!heatMap.length) {
    return <div>No activity yet.</div>;
  }

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
      className="px-4 mx-auto"
      renderBlock={(block, activity) => {
    return (
      <rect
        {...block.props}
        onClick={() => handleDateClick(activity.date)}
        style={{ cursor: "pointer" }}
      />
    );
  }}
    />
  );
}
