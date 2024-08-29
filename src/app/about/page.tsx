'use client'
import React from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from 'next/image';

const page = () => {
  return (
    <div className="h-screen w-full bg-black rounded-md bg-zinc-850 relative flex items-center justify-center antialiased">
      <div className="p-4 sm:flex gap-10 sm:p-2 ">
      <Image
                    src={"/images/artist.jpg"}
                    alt="jordans"
                    height="200"
                    width="200"
                    className="{object-contain rounded-full"
                  />

        <p className="text-neutral-500 max-w-2xl mx-auto my-2 text-md text-left relative z-10">
        As a passionate songwriter based in Haridwar, India, I have dedicated myself to crafting meaningful melodies and relatable lyrics. I believe in the power of music to connect with people on a deep emotional level. My goal is to create songs that resonate with listeners and evoke a sense of nostalgia, inspiration, or joy. I am always open to collaborating with other musicians and exploring new creative opportunities. If you are interested in working together, please feel free to contact me.
        </p>
        
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default page;