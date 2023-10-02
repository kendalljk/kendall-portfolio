"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import resumeImage from "../../public/Kendall Cercone Full Stack Developer.png";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
    const pathname = usePathname();

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={`flex w-full fixed top-0 font-lato  z-10`}>
            <div className="navlinks my-4 text-sm text-cyan-800 self-center uppercase w-full flex justify-between">
                <div>
                    <Link href="/">
                        <h2 className="px-10 text-3xl uppercase font-oswald justify-self-center text-orange-300">
                            KC
                        </h2>
                    </Link>
                </div>
                <div>
                    <div className="px-10 pt-3">
                        <FaBars
                            onClick={toggleDropdown}
                            size={40}
                            className="cursor-pointer"
                        />
                        {isDropdownOpen && (
                            <div className="absolute mt-2 mr-5 text-right right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <Link
                                        href="/"
                                        className={`block px-4 py-2 text-lg ${
                                            pathname === "/"
                                                ? "underline underline-offset-8"
                                                : ""
                                        }`}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/Kendall%20Cercone%20Full%20Stack%20Developer.png"
                                        target="_blank"
                                        download="Kendall Cercone Resume.png"
                                        className={`block px-4 py-2 text-lg ${
                                            pathname === "/resume"
                                                ? "underline underline-offset-8"
                                                : ""
                                        }`}
                                    >
                                        Resume
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={`block px-4 py-2 text-lg ${
                                            pathname === "/contact"
                                                ? "underline underline-offset-8"
                                                : ""
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
