'use client'
import Link from "next/link"
import writingData from "@/data/writing_data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Writing {
    id: number,
    title: string,
    imageUrl: string,
    isFeatured: boolean,
    type: string
}

const WritingSection = () => {
    const featuredWriting = writingData.writings.filter((writings: Writing) => writings.isFeatured)


    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h1 className="text-3xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">Writings</h1>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredWriting.map((writings: Writing) => (
                        <div key={writings.id} className="flex justify-center p-4">
                            <Link href={`/${writings.type}/${writings.title}`}>
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                <Image
                                    src={writings.imageUrl}
                                    alt="jordans"
                                    height="200"
                                    width="200"
                                    className="object-contain"
                                />
                                <p className="text-center text-[15px] text-black mt-4 dark:text-neutral-200">
                                    {writings.title}
                                </p>
                            </BackgroundGradient>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link href={"/writings"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View more
                </Link>
            </div>
        </div>
    )
}

export default WritingSection