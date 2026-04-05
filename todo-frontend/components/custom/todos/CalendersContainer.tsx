import Calender from "../Calender"
import  HeatCalender from "../HeatCalender"

const CalendersContainer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8">
        <Calender/>
        <HeatCalender/>
    </div>
  )
}

export default CalendersContainer