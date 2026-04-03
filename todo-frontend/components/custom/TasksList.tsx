"use client"
import { Button } from '../ui/button'

const TasksList = ({filter}: any) => {
  return (
    <div className='flex-1 overflow-y-auto space-y-3'>

                {/* Task Card */}
                <div className='group p-4 rounded-xl border flex items-center justify-between hover:shadow-sm transition'>
                    <div>
                        <p className='font-medium group-hover:text-black dark:group-hover:text-white'>Title - Build todo App</p>
                        <p className='text-sm text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300'>Description</p>
                    </div>
                    <div className='flex gap-2'>
                        <Button variant='outline' size='sm' className='cursor-pointer'>Done</Button>
                        <Button variant='destructive' size="sm" className='cursor-pointer'>Delete</Button>
                    </div>
                </div>
                <div className="text-center text-zinc-500 mt-10">
              No tasks yet. Start by creating one 🚀
            </div>
            </div>
  )
}

export default TasksList