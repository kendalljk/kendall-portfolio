"use client";
import Navigation from "@@component/component/components/Navigation";
import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center pt-12">
                <div className="w-1/2 text-center">
                    <div className="">
                        <Image
                            src="/kendall-photo.jpg"
                            className=""
                            alt="Two people standing with in front of a sunset with their backs to the camera"
                        />
                    </div>
                    <p className="my-2">
                        <span className="font-bold text-apricot">{`Hi, I'm Kendall. `}</span>{" "}
                        {`I'm a Full Stack Web
                  Developer with a unique blend of educational and professional
                  experiences. With a Bachelor's degree in English and numerous
                  years working in the health field, I bring a strong foundation
                  in communication and analytical thinking to the world of web
                  development. My experience instilled in me a deep
                  understanding of the importance of user-centered design and
                  functionality, especially in creating digital solutions that
                  can positively impact people's lives`}
                    </p>
                    <p className="my-2">{`What truly drives me in the field of web development is the sense of satisfaction from building something from scratch. I have a particular affinity for front-end development, reveling in the challenge of bringing designs to life and fine-tuning the user experience. The 'aha' moments in coding, when a complex problem yields to a solution, are what keeps me always striving to learn more.`}</p>
                </div>
            </div>
        </div>
    );
}
