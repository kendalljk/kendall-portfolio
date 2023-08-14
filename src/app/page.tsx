"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import LoadingPage from "../components/LoadingPage";
import Image from "next/image";
import placeholder from "../app/resources/placeholder.jpg";

export default function Home() {
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    const hideDuringLoading = (loading: boolean) => {
        if (loading === true) {
            return `hidden`;
        } else {
            return ``;
        }
    };

    return (
        <main className="flex flex-col min-h-screen min-w-full">
            <LoadingPage
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                loading={loading}
                setLoading={setLoading}
            />
            {!loading && <Navigation />}
            {!loading && <Sidebar />}
            <section
                className={`about ${hideDuringLoading(
                    loading
                )} flex min-w-full justify-end`}
            >
                <div className="flex lg:w-2/3 sm:w-full justify-end">
                    <div className="mt-20 flex justify-center">
                        <div className="lg:w-2/3 md:w-full">
                            <p className="text-slate-700">
                                {`Hey, I'm Kendall. My journey in the healthcare sector has seen me working as a Physical Therapist Assistant specializing in the LTAC and SNF settings. In this role, I work with individuals during some of the most challenging periods of their lives, assisting them to regain physical wellbeing and strive for a return to full functionality. Working in healthcare, part of my responsibilities were to  immerse myself in and make efficient use of various EMR software technologies, gaining insights that go beyond the surface. During a hospital wide transition to a new software, I functioned as an SME to assist with providing initial and follow up coachings to hospital staff to help ensure successful integration.`}
                            </p>
                            <p className="mt-5 text-slate-700">{`These hands-on experiences have provided me with deep insights and cultivated a genuine appreciation for the tangible benefits that technology can bring to improving processes and providing positive change. This perspective fuels my motivation to channel my technical skills and unwavering commitment into creating innovative, user-centric web experiences.`}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`projects ${hideDuringLoading(
                    loading
                )} flex min-w-full justify-end`}
            >
                <div className="flex lg:w-2/3 sm:w-full justify-end">
                    <div className=" mt-10 flex justify-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl uppercase text-cyan-700">
                                Projects
                            </h1>
                            <figure className="lg:w-2/3 md:w-full">
                                <Image
                                    src={placeholder}
                                    alt="placeholder image"
                                    width={800}
                                    height={100}
                                    className="mt-10"
                                />
                                <figcaption className="text-slate-500 italic mx-auto">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Fuga quasi illo mollitia
                                    perferendis, odit adipisci assumenda esse
                                    dolorem repellat quam vitae reiciendis ut
                                    maxime odio quas delectus qui? Iusto, ipsa.
                                </figcaption>
                            </figure>
                            <figure className="lg:w-2/3 md:w-full">
                                <Image
                                    src={placeholder}
                                    alt="placeholder image"
                                    width={800}
                                    height={100}
                                    className="mt-10"
                                />
                                <figcaption className="text-slate-500 italic">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Fuga quasi illo mollitia
                                    perferendis, odit adipisci assumenda esse
                                    dolorem repellat quam vitae reiciendis ut
                                    maxime odio quas delectus qui? Iusto, ipsa.
                                </figcaption>
                            </figure>
                            <figure className="lg:w-2/3 md:w-full">
                                <Image
                                    src={placeholder}
                                    alt="placeholder image"
                                    width={800}
                                    height={100}
                                    className="mt-10"
                                />
                                <figcaption className="text-slate-500 italic">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Fuga quasi illo mollitia
                                    perferendis, odit adipisci assumenda esse
                                    dolorem repellat quam vitae reiciendis ut
                                    maxime odio quas delectus qui? Iusto, ipsa.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
