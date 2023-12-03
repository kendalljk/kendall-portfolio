import React, { useState } from "react";
import { FaDoorOpen } from "react-icons/fa";
import Image from "next/image";

interface ProjectProps {
    title: string;
    image: string;
    video: string;
    description: string;
    keyFeatures: string[]; 
    link: string;
    languages: string;
}

const Project: React.FC<ProjectProps> = ({
    title,
    image,
    video,
    description,
    keyFeatures,
    link,
    languages,
}) => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const showVideo = () => {
        setIsVideoVisible(!isVideoVisible);
    };

    const goToProject = () => {
        window.location.href = link;
    };

    return (
        <figure className="lg:w-1/2 md:w-full pt-12">
            <div
                className={`w-full relative ${isVideoVisible ? "hidden" : ""}`}
                onClick={showVideo}
            >
                <Image
                    src={image}
                    className="opacity-30 w-full"
                    alt={`Initial mockup design for project`}
                />
                <div className="w-full">
                    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-vibrant-blue-gray project-header uppercase tracking-tighter text-[8vw] hover:cursor-pointer hover:text-vibrant-sage-green">
                        {title}
                    </h2>
                </div>
            </div>
            <video
                src={video}
                controls
                className={`w-full h-full ${isVideoVisible ? "" : "hidden"}`}
                onClick={showVideo}
            ></video>
            <div className="flex flex-col pt-2 text-slate-gray">
                <div className="w-full pr-10">
                    <h3 className="text-orange-300">{languages}</h3>
                    <p className="italic">{description}</p>
                    <ul>
                        {keyFeatures.map((feature, index: number) => (
                            <li key={index} className="list-disc text-sm ml-10">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <a
                    href={link}
                    className="flex inline bg-sage-green hover:bg-vibrant-sage-green
                active:bg-forest-green
                focus:outline-none
                focus:ring
                focus:ring-sage-green
                disabled:bg-gray-400
                disabled:cursor-not-allowed
                text-white
                font-bold
                py-2
                px-4
                rounded-full
                items-center
                w-fit m-auto gap-2 my-2"
                >
                    <h3>Go visit</h3>
                    <FaDoorOpen className="" />
                </a>
            </div>
        </figure>
    );
};

export default Project