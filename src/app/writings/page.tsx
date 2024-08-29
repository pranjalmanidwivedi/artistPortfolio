import React from 'react'
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center mt-20'>
        <Link href={"/songs"}>
        <CardSpotlight className="h-48 w-48 flex justify-center items-center">
          <h1 className='text-3xl text-center text-white'>Songs</h1>
        </CardSpotlight>
        </Link>

        <Link href={"/ghazals"}>
        <CardSpotlight className="h-48 w-48 flex justify-center items-center">
          <h1 className='text-3xl text-center text-white'>Ghazals</h1>
        </CardSpotlight>
        </Link>

        <Link href={"/shayari"}>
        <CardSpotlight className="h-48 w-48 flex justify-center items-center">
          <h1 className='text-3xl text-center text-white'>Shayari</h1>
        </CardSpotlight>
        </Link>
      </div>
    </div>
  )
}

export default page