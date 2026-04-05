import { ActivityCalendar } from "react-activity-calendar";

const data = [
  {
    date: "2024-06-23",
    count: 2,
    level: 1,
  },
  {
    date: "2024-08-02",
    count: 16,
    level: 4,
  },
  {
    date: "2024-11-29",
    count: 11,
    level: 3,
  },
];

export default function HeatCalendar() {
  return <ActivityCalendar data={data} colorScheme="light" />;
}
