"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
    const router = useRouter();
  const pathname = usePathname();


    const isActive = (path:string) => {
        return `text-blue-gray hover:text-orange-300 ${
            pathname === path ? "text-orange-400" : ""
        }`;
    };

    return (
        <nav className={`flex w-full absolute top-0 z-1 navbar`}>
            <div className="my-1 text-sm text-cyan-800 self-center uppercase w-full flex justify-between">
                <div className="w-full flex justify-center gap-5 px-5 text-xl uppercase">
                    <Link href="/">
                        <h2 className={isActive("/")}>Home</h2>
                    </Link>
                    <Link href="/about">
                        <h2 className={isActive("/about")}>About</h2>
                    </Link>
                    <Link href="/projects">
                        <h2 className={isActive("/projects")}>Projects</h2>
                    </Link>
                    <Link href="/contact">
                        <h2 className={isActive("/contact")}>Contact</h2>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
