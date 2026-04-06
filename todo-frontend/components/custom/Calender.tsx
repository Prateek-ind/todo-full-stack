import React from "react";
import { Calendar } from "../ui/calendar";
import { enGB } from "date-fns/locale";
import { CalenderContainerProps } from "@/types/calenderContainerTypes";

const Calender = ({ date, setDate }: CalenderContainerProps) => {
  

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      locale={enGB}
      className="rounded-lg border"
    />
  );
};

export default Calender;
