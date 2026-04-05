"use client"

import { useState } from "react"
import Header from "./Header"
import TasksList from "./TasksList"
import TodosSidebar from "./Sidebar"

const TodosClient = () => {
  const [filter, setFilter] = useState<'pending' | 'completed'>('pending')

  return (
    <>
      <Header />

      <div className='grid grid-cols-3 gap-6 h-[calc(100%-80px)]'>
        <TodosSidebar filter={filter} setFilter={setFilter} />
        <TasksList filter={filter} />
      </div>
    </>
  )
}

export default TodosClient