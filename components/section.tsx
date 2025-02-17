import hero from "@/public/sec1.png"
import Image from "next/image"
import { Button } from "./ui/button"


export const Section = () => {
  return (

    <div className="flex flex-col justify-center items-center gap-10 md:flex-row mt-10 max-w-[95%] lg:max-w-[85%] mx-auto">  
        <div className="md:w-1/2 lg:w-1/2">

            <div className="text-3xl  md:text-4xl lg:text-5xl font-extrabold text-center ">
                Triggerly – Automate More,<br /> <span className="text-blue-500">Work Less!</span>
            </div>

            <div className="text-center text-lg md:text-xl lg:text-2xl mt-5">
                Turn chaos into smooth operations by automating workflows yourself—no developers, no IT tickets, no delays. The only limit is your imagination.
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
                <Button size={"lg"} className="rounded-full px-10 md:text-lg lg:text-xl md:py-5 lg:py-6">Start free with email</Button>
                <Button variant="outline" size={"lg"} className="rounded-full px-10 md:text-lg lg:text-xl md:py-5 lg:py-6">Start free with Google</Button>
            </div>
        </div>

        <div>
            <Image src={hero} alt="hero" width={500} height={500} />
        </div>
    </div>
  )
}
