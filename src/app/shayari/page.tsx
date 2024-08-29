"use client";

import React from "react";
import writingData from "@/data/writing_data.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

const page = () => {

  const shayari = writingData.writings.filter((writings) => writings.type==="shayari")

  return (
    <div className="gap-8 grid grid-cols-1 bg-black sm:grid-cols-2 lg:grid-cols-3 lg:px-48 justify-evenly mt-10 px-4 py-4 pt-28">
          {shayari.map((shayari) => (
            
            <div key={shayari.id} className="flex justify-evenly items-center">
              
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  
                  <p className=" text-black mt-4 dark:text-neutral-200 text-center text-[15px]">
                    {shayari.description}
                  </p>

                </BackgroundGradient>
            </div>
          ))}
        </div>
  )
}

export default page








