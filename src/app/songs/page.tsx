"use client";

import React from "react";
import writingData from "@/data/writing_data.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube, faApple } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const page = () => {

  const songs = writingData.songs;

  return (
    <div className="gap-8 grid grid-cols-2 bg-black sm:grid-cols-3 lg:grid-cols-3 lg:px-48 justify-evenly mt-10 px-4 py-4 pt-28">
          {songs.map((songs) => (
            <div key={songs.id} className="flex justify-evenly items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <Image
                    src={songs.imageUrl}
                    alt="jordans"
                    height="200"
                    width="200"
                    className="object-contain"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 dark:text-neutral-200">
                    {songs.title}
                  </p>

                  <div className="flex gap-5 text-white text-3xl mt-4 justify-between">
                    <Link href={songs.spotifyLink}>
                      <FontAwesomeIcon icon={faSpotify} />
                    </Link>

                    <Link href={songs.youtubeLink}>
                      <FontAwesomeIcon icon={faYoutube} />
                    </Link>

                    <Link href={songs.appleMusicLink}>
                      <FontAwesomeIcon icon={faApple} />
                    </Link>
                  </div>
                </BackgroundGradient>
            </div>
          ))}
        </div>
  )
}

export default page








