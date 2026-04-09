import { CalenderContainerProps } from "@/types/calenderContainerTypes"
import Calender from "./Calender"
import  HeatCalender from "./HeatCalender"



const CalendersContainer = ({ date, setDate }: CalenderContainerProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
        <Calender date={date} setDate={setDate}/>
        <HeatCalender date={date} setDate={setDate}/>
    </div>
  )
}

export default CalendersContainer