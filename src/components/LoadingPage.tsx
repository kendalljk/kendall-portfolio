import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import React from 'react'

const LoadingPage = ({ isVisible, setIsVisible, loading, setLoading }) => {

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000); // Delay of 3 seconds for message to display

            const loadingTimer = setTimeout(() => {
                setLoading(false);
            }, 3500); // delay hiding display to allow for animation

            return () => {
                clearTimeout(timer);
            };
        }, []); // scroll up animation for full page

        const hideLoading = (loading: boolean) => {
            if (loading ===true) {
                return `min-h-screen`;
            } else {
                return `hidden`;
            }
        };

    return (
                <motion.div
                    className={`box ${hideLoading(loading)}`}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : -200,
                    }}
                    transition={{
                        duration: 0.75,
                    }}
                    style={{
                        backgroundColor: "#1C2541",
                        color: "white",
                    }}
                >
                    <div
                        className={`${hideLoading(
                            loading
                        )} flex flex-col justify-center items-center text-center text-2xl tracking-widest`}
                    >
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
  )
}

export default LoadingPage