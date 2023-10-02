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
                className={`projects ${hideDuringLoading(
                    loading
                )} flex min-w-full justify-end`}
            >
                <div className="flex lg:w-2/3 sm:w-full justify-end px-10">
                    <div className=" mt-20 flex justify-center">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl uppercase text-cyan-700">
                                Projects
                            </h1>
                            <figure className="lg:w-2/3 md:w-full">
                                <Image
                                    src={placeholder}
                                    alt="placeholder image"
                                    width={1000}
                                    height={1000}
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
                                    width={1000}
                                    height={1000}
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
                                    width={1000}
                                    height={1000}
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
