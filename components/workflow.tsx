

import { VideoComponent } from "./video-component"
import { VideoDesc } from "./video-desc";   

export const Workflow = () => {

    return (
        <div className="mt-10 bg-gray-100">
            <div className="h-5 md:14 lg:h-14">
            </div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mt-10">
                Create smooth, powerful  <br /> <span className="text-blue-500">workflows</span> in a flash.
            </div>

            <div className="text-center mt-4 font-bold text-md md:text-lg lg:text-xl max-w-[80%] md:max-w-[60%] lg:max-w-[60%] mx-auto">
                Whether you&apos;re a solo entrepreneur or part of a large team, Triggerly gives you the power to automate without any coding. Elevate your workflows with our suite of seamless automation tools.
            </div>

            <div className="flex flex-col bg-white justify-center items-center mt-10 max-w-[95%] md:max-w-[80%] lg:max-w-[60%] mx-auto">
                <VideoComponent />

                <VideoDesc />
            </div>
            <div className="h-16">

            </div>


        </div>
    )
}

