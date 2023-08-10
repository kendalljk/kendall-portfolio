"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
    const pathname = usePathname(); // to conditionally underline active pathname
    return (
        <nav className="flex w-full fixed font-lato">
            <div className="navlinks my-4 text-sm text-cyan-800 self-center uppercase w-full flex justify-around">
                <div>
                    <Link
                        href="/about"
                        className={`mx-4 ${
                            pathname === "/about"
                                ? "underline underline-offset-8"
                                : ""
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        href="/work"
                        className={`${
                            pathname === "/work"
                                ? "underline underline-offset-8"
                                : ""
                        }`}
                    >
                        Work
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <h2 className="px-10 text-2xl uppercase font-oswald justify-self-center text-slate-600">
                            Kendall Cercone
                        </h2>
                    </Link>
                </div>
                <div>
                    <Link
                        href="/contact"
                        className={` ${
                            pathname === "/contact"
                                ? "underline underline-offset-8"
                                : "my-4 bg-cyan-800 py-2 px-4 rounded-2xl text-slate-50"
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
