"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import resumeImage from "../../public/Kendall Cercone Full Stack Developer.png";

const Navigation = () => {
    const pathname = usePathname(); // to conditionally underline active pathname
    return (
        <nav className={`flex w-full fixed top-0 font-lato  z-10`}>
            <div className="navlinks my-4 text-sm text-cyan-800 self-center uppercase w-full flex justify-between">
                <div>
                    <Link href="/">
                        <h2 className="px-10 lg:text-2xl uppercase font-oswald justify-self-center text-orange-200">
                            KC
                        </h2>
                    </Link>
                </div>
                <div>
                    <div className="px-10">
                        <a
                            href="/Kendall%20Cercone%20Full%20Stack%20Developer.png"
                            target="_blank"
                            download="Kendall Cercone Resume.png"
                            className={`m-4 hover:font-bold hover:text-cyan-500 ${
                                pathname === "/resume"
                                    ? "underline underline-offset-8"
                                    : ""
                            }`}
                        >
                            Resume
                        </a>
                        <Link
                            href="/contact"
                            className={` hover:font-bold ${
                                pathname === "/contact"
                                    ? "underline underline-offset-8"
                                    : "bg-cyan-700 py-2 px-4 rounded-2xl text-slate-50"
                            }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
