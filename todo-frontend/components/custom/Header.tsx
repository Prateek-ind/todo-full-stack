"use client"
import { Button } from '../ui/button'

const Header = () => {
  return (
    <div className=' flex items-center justify-between mb-6'>
            <h1 className='text-3xl font-semibold'>My Tasks</h1>
            <div className='flex gap-4'>
                <Button className='rounded-xl cursor-pointer'>+ New Task</Button>
                <Button variant="outline" className='hover:text-red-500 hover:bg-red-50 rounded-xl cursor-pointer'>Logout</Button>
            </div>
            
        </div>
  )
}

export default Header