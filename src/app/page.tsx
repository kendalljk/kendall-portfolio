"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import LoadingPage from "../components/LoadingPage";
import Image from "next/image";
import placeholder from "../app/icons/photos/placeholder.jpg";

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
                )} flex justify-end`}
            >
                <div className="flex min-w-full">
                    <div className="w-full mt-20 flex justify-end">
                        <div className="lg:w-2/3 sm:w-full">
                            <p className="text-slate-700">
                                {`Hey, I'm Kendall. What started as a hobby turned
                            into a passionate pursuit, propelling me into the
                            dynamic world of technology. With a background in
                            healthcare and communication, I've learned the
                            importance of attention to detail and a resillient
                            and collaborative approach to problem-solving. Now,
                            as I dive into coding, I'm excited to bring that
                            same dedication to creating innovative and
                            user-centered web experiences.`}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`projects ${hideDuringLoading(
                    loading
                )} flex justify-end`}
            >
                <div className="flex lg:w-2/3 sm:w-full justify-end">
                    <div className=" mt-10 flex justify-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl">Projects</h1>
                            <Image
                                src={placeholder}
                                alt="placeholder image"
                                width={800}
                                height={100}
                                className="mt-10"
                            />
                            <p className="text-slate-500 italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga quasi illo mollitia
                                perferendis, odit adipisci assumenda esse
                                dolorem repellat quam vitae reiciendis ut maxime
                                odio quas delectus qui? Iusto, ipsa.
                            </p>
                            <Image
                                src={placeholder}
                                alt="placeholder image"
                                width={800}
                                height={100}
                                className="mt-10"
                            />
                            <p className="text-slate-500 italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga quasi illo mollitia
                                perferendis, odit adipisci assumenda esse
                                dolorem repellat quam vitae reiciendis ut maxime
                                odio quas delectus qui? Iusto, ipsa.
                            </p>
                            <Image
                                src={placeholder}
                                alt="placeholder image"
                                width={800}
                                height={100}
                                className="mt-10"
                            />
                            <p className="text-slate-500 italic">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga quasi illo mollitia
                                perferendis, odit adipisci assumenda esse
                                dolorem repellat quam vitae reiciendis ut maxime
                                odio quas delectus qui? Iusto, ipsa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
