'use client'

import AuthModal from "@/components/custom/AuthModal";
import HeroCard from "@/components/custom/HeroCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function Home() {
  const [open, setOpen] = useState(false)

  const handleOpen = ()=>{
    setOpen(!open)
  }

  return (
    <div className="px-6 flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
        <div className="grid grid-cols-2 gap-10 max-w-6xl w-full items-center">

          {/* left side*/}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Organize your life, 
              <span className="font-bold tracking-tight text-zinc-900 dark:text-white"> simply</span></h1>

              <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-md"> A minimal space to manage your tasks, stay focused, and get things done without clutter.</p>

              <div className="flex gap-4">
                <Button onClick={handleOpen} className="rounded-xl py-2 px-6 cursor-pointer">Register / Login</Button>
                
              </div>
          </div>

          <HeroCard/>



        </div>
      <AuthModal open={open} setOpen={setOpen}/>
    </div>
  );
}
