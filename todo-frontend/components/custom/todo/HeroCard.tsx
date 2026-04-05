import React from 'react'

const HeroCard = () => {
  return (
    <div className="relative hidden md:block">

            <div className="absolute -inset-4 bg-gradient-to-r from-zinc-300 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 blur-2xl opacity-50 rounded-3xl"></div>
            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-4">
            
            <div className="h-4 w-2/3 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
            <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
            <div className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded"></div>

            <div className="flex items-center gap-2 pt-4">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <span className="text-sm text-zinc-500">Task completed</span>
            </div>
          </div>
          </div>
  )
}

export default HeroCard