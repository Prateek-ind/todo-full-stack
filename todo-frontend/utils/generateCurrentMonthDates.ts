import { formatDate } from "./formatDate";


export const generateCurrentMonthDates = () => {
    const dates: string[] = [];
    const today = new Date()
    const currentMonth = today.getMonth()
    const year = today.getFullYear()

    const months = [currentMonth-2, currentMonth - 1, currentMonth, currentMonth + 1,];

  

    months.forEach((m) => {

        const d = new Date(year, m, 1);

        const years = d.getFullYear();
        const month = d.getMonth();

        const daysInMonth = new Date(years, month+1, 0).getDate();

        for(let day = 1; day <= daysInMonth; day++) {
            const date = new Date(years, month, day);
            const formattedDate = formatDate(date)
            dates.push(formattedDate);
        }

    });
    return dates;
}