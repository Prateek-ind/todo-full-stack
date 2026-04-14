"use client";

import AuthButton from "@/components/custom/AuthButton";
import HeroCard from "@/components/custom/HeroCard";


export default function Home() {
  

  return (
    <div className="px-6 flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900 font-sans ">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        {/* left side*/}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Organize your life,
            <span className="font-bold tracking-tight text-zinc-900 dark:text-white">
              {" "}
              simply
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-md">
            {" "}
            A minimal space to manage your tasks, stay focused, and get things
            done without clutter.
          </p>

          <AuthButton/>
        </div>

        <HeroCard />
      </div>
      
    </div>
  );
}
