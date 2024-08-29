"use client";

import React from "react";
import writingData from "@/data/writing_data.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

const page = () => {

  const ghazals = writingData.writings.filter((writings) => writings.type==="ghazals")

  return (
    <div className="gap-8 grid grid-cols-1 bg-black sm:grid-cols-2 lg:grid-cols-3 lg:px-48 justify-evenly mt-10 px-4 py-4 pt-28">
          {ghazals.map((ghazals) => (
            <div key={ghazals.id} className="flex justify-evenly items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <Image
                    src={ghazals.imageUrl}
                    alt="jordans"
                    height="200"
                    width="200"
                    className="object-contain"
                  />
                  <p className=" text-black mt-4 dark:text-neutral-200 text-center text-[15px]">
                    {ghazals.title}
                  </p>

                </BackgroundGradient>
            </div>
          ))}
        </div>
  )
}

export default page








