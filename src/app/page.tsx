"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // Delay of 5 seconds

        return () => {
            clearTimeout(timer);
        };
    }, []); // scroll up animation for full page

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/about");
        }, 4000); // navigate to about after animations done

        return () => {
            clearTimeout(timer);
        };
    }, [router]);

    return (
        <div>
            <motion.div
                className="box"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : -100,
                }}
                transition={{
                    duration: 0.75,
                }}
            >
                <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col justify-center items-center text-center text-6xl">
                    <motion.h1
                        className="box"
                        initial={{ opacity: 0, scale: 0.5, y: 0 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        Kendall Cercone
                    </motion.h1>
                    <motion.h2
                        className="box"
                        initial={{ opacity: 0, scale: 0.5, y: 0 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 1.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        Full Stack Developer
                    </motion.h2>
                </div>
            </motion.div>
        </div>
    );
}
