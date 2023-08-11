"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {

    const pathname = usePathname(); // to conditionally underline active pathname
    return (
      <nav className={`flex w-full fixed top-0 font-lato bg-white z-10`}>
            <div className="navlinks my-4 text-sm text-cyan-800 self-center uppercase w-full flex justify-between">
                <div>
                    <Link href="/">
                        <h2 className="px-10 text-2xl uppercase font-oswald justify-self-center text-slate-600">
                            Kendall Cercone
                        </h2>
                    </Link>
                </div>
                <div>
                    <div className="px-10">
                        <Link
                            href="/work"
                            className={`m-4 hover:font-bold hover:text-cyan-500 ${
                                pathname === "/work"
                                    ? "underline underline-offset-8"
                                    : ""
                            }`}
                        >
                            Resume
                        </Link>
                        <Link
                            href="/contact"
                            className={` hover:font-bold ${
                                pathname === "/contact"
                                    ? "underline underline-offset-8"
                                    : "bg-cyan-800 py-2 px-4 rounded-2xl text-slate-50"
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
