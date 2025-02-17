"use client";
import { useState } from "react";

const workflowSteps = [
    {
        id: 1,
        title: "Connect ",
        description: "Connect your data from your favorite apps and services. Triggerly will automatically sync your data from your favorite apps and services."
    },
    {
        id: 2,
        title: "Automate",
        description: "Automate your workflows with our suite of seamless automation tools."
    },
    {
        id: 3,
        title: "Scale",
        description: "Scale your workflows to handle more data and more users."
    },
    {
        id: 4,
        title: "Automate",
        description: "Automate your workflows with our suite of seamless automation tools."
    }
]

export const VideoDesc = () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <>
            <div className="flex justify-evenly w-full  mt-5 gap-4 text-sm md:text-xl lg:text-2xl   ">
                {workflowSteps.map((step) => (
                    <div key={step.id} className="flex hover:bg-gray-200 hover:cursor-pointer rounded-full px-4 py-2 gap-2">
                        <div className=" font-bold" onClick={() => setActiveStep(step.id)}>{step.title}</div>
                    </div>
                ))}
            </div>
            <div className="text-sm md:text-lg font-light lg:text-xl mt-8 mx-[20%] text-center mb-10">
                {
                    activeStep ? workflowSteps.find(step => step.id === activeStep)?.description : workflowSteps[0].description
                }
            </div>
        </>
    )
}