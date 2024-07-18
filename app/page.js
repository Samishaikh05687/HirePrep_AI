"use client";
 
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-gray-100 shadow-2xl shadow-black">
      <div className="relative flex h-[720px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      
          <div className="max-w-[50rem] m-0 p-0">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to-violet-500 leading-3 text-center font-sans font-bold">
          Ace Interviews with HirePrep AI
          </h1>

          <p className="text-black max-w-[40rem] mx-auto my-2 text-[18px]   text-center relative z-10">
          Welcome to HirePrep AI! Revolutionize your interview preparation with our cutting-edge AI-powered mock interviewer. Designed for job seekers of all levels, HirePrep AI offers a personalized, interactive, and realistic interview experience. 
          </p>
          <div className="flex items-center justify-center flex-col mt-5">
            <Button
              size={"lg"}
              className="p-8 mb-8 z-10 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-black bg-gradient-to-b from-sky-400 to-violet-500 hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-800 duration-500"
            >
              <span className="bg-clip-text text-white  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                Start For Free Today
              </span>
            </Button>
          </div>
          <DotPattern
          cr={2}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]",
        )}
      />
        </div>
             </div>
    </main>
  );
}
