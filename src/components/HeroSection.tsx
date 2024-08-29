import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className='h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='p-4 
            relative z-10 w-full text-center flex flex-col justify-center items-center'>
                <h1 className="mt-20 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">KhoGaya is released everywhere</h1>

                <div className="mt-5">
                    <Image
                        src="/images/image.jpg" // Replace with your image path
                        alt="My Image"
                        width={300} // Specify the image width in pixels
                        height={100} // Specify the image height in pixels
                    />
                </div>

                <div className='mt-5'>
                    <Link href={"https://youtu.be/GeQ3TwECFjk?si=ttusmtjq_JAk5CA2"}>
                        <Button borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl">Listen Now</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HeroSection