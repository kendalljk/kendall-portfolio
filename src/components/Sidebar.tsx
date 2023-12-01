import profilePic from "../app/resources/kendall.png";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="lg:fixed sm:relative flex flex-col lg:h-screen px-10 lg:w-1/4 md:w-full mx-auto">
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col w-full ">
                    <div className="flex">
                        <div className="lg:w-2/3 pt-12">
                            <Image
                                src={profilePic}
                                alt="Kendall Cercone photo"
                                width={300}
                                max-height={200}
                                className="rounded-full mx-2 border-2 border-dotted"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center pl-5 pt-20">
                            <h1 className="text-2xl tracking-wider text-cyan-700">
                                Kendall Cercone
                            </h1>
                            <div className="flex items-center">
                                <MdLocationPin className="text-orange-200" />
                                <p className="ml-2">Evanston, IL</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <em>
                            <p className="text-lg font-bold mx-2 my-5 text-slate-500 tracking-wide text-center">
                                {`Full Stack Developer with a passion for blending
front-end creativity with technical
precision to create compelling
digital experiences.`}
                            </p>
                        </em>
                        <aside className="m-2 text-slate-500">
                            {`Outside of work, you can find me `}
                            <span className="font-bold text-cyan-500">
                                <a href="https://www.traillink.com/trail/chicago-lakefront-trail/">
                                    {` biking the trails `}
                                </a>
                            </span>
                            {` with my husband,`}
                            <span className="font-bold text-cyan-500">
                                <a href="https://next-shelf-help.vercel.app/">
                                    {` reading `}
                                </a>
                            </span>
                            {` on my balcony, or cheering on the  `}
                            <span className="font-bold text-cyan-500 hover:text-red-700 hover:bg-sky-300">
                                <a href="https://www.timbers.com/thornsfc/schedule/">
                                    {` Chicago Redstars. `}
                                </a>
                            </span>
                        </aside>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="mx-2 flex flex-wrap justify-center text-xs">
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            HTML
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            CSS
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            TypeScript
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            React
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            JavaScript
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Next.js
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Tailwind
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Bootstrap
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Material UI
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Git
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Github
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Vercel
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Figma
                        </li>
                        <li className="mx-1 bg-cyan-700 text-white p-1 rounded my-1">
                            Canva
                        </li>
                    </ul>
                </div>
                <div className="w-full my-2 mr-2 flex flex-col justify-between">
                    <div className="flex justify-center gap-10">
                        <a
                            href="https://www.linkedin.com/in/kendallcercone"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                className="text-cyan-700 hover:text-orange-300"
                                size={30}
                            />
                        </a>
                        <a
                            href="https://www.github.com/kendalljk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare
                                className="text-cyan-700 hover:text-orange-300"
                                size={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
