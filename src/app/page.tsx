"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import LoadingPage from "../components/LoadingPage";
import Image from "next/image";
import placeholder from "../app/resources/placeholder.jpg";
import Project from "../components/Project";

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
                            <h1 className="text-2xl uppercase text-cyan-700">
                                Projects
                            </h1>
                            <Project
                                title={`Photographer Website`}
                                description={`I worked closely with the photographer to create a visually appealing portfolio while utilizing the Flickr API to offload media storage, allow for automatic updates, and ensure faster page loading.`}
                                link={``}
                                video={``}
                            />
                            <Project
                                title={`Shelf Help`}
                                description={`I worked closely with the photographer to create a visually appealing portfolio while utilizing the Flickr API to offload media storage, allow for automatic updates, and ensure faster page loading.`}
                                link={`https://next-shelf-help.vercel.app/`}
                                video={``}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
