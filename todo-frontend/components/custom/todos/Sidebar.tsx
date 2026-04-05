"use client"



const TodosSidebar = ( {filter, setFilter}: React.SetStateAction) => {

  return (
     <div className='col-span-1 bg-white dark:bg-zinc-800 rounded-2xl p-4 shadow-sm flex flex-col gap-4'>
        <h2 className='text-lg font-medium'>Overview</h2>

            <div className='flex flex-col gap-3'>
                <div
                    onClick={()=>setFilter('pending')}
                    className={`p-3 rounded-xl cursor-pointer transition ${filter==='pending'? 
                    'bg-black text-white dark:bg-white dark:text-black': 
                    "bg-zinc-100 dark:bg-zinc-700 hover:opacity-80" }`}>
                        Pending Tasks
                </div>
                <div 
                    onClick={()=>setFilter('completed')}
                    className={`p-3 rounded-xl cursor-pointer transition ${filter==='completed'? 
                    'bg-black text-white dark:bg-white dark:text-black': 
                    "bg-zinc-100 dark:bg-zinc-700 hover:opacity-80" }`}>
                        Completed Tasks
                </div>
            </div>
    </div>
  )
}

export default TodosSidebar