export const isPastDate = (date: Date | string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const taskDate = new Date(date)
    taskDate.setHours(0, 0, 0, 0);

    return taskDate < today;
}