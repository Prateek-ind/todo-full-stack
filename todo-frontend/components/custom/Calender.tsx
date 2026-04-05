import React, { useEffect } from "react";
import { Calendar } from "../ui/calendar";
import { enGB } from "date-fns/locale";

const Calender = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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
