"use client";
import { Calendar } from "../ui/calendar";
import { enGB } from "date-fns/locale";
import { CalenderContainerProps } from "@/types/calenderContainerTypes";

const Calender = ({ date, setDate }: CalenderContainerProps) => {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(selectedDate) => {
        if (selectedDate) {
          setDate(selectedDate);
        }
      }}
      locale={enGB}
      className="rounded-lg border"
    />
  );
};

export default Calender;
