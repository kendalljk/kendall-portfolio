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
                        <div className="lg:w-2/3 pt-20">
                            <Image
                                src={profilePic}
                                alt="Kendall Cercone photo"
                                width={200}
                                max-height={100}
                                className="rounded-full mx-2 border-2 border-dotted"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center mx-4">
                            <h1 className="lg:text-lg sm:text-xl tracking-wider text-cyan-700">
                                Kendall Cercone
                            </h1>
                            <div className="flex items-center">
                                <MdLocationPin
                                    style={{
                                        color: "rgb(252, 205, 164)",
                                    }}
                                />
                                <p className="ml-2">Portland, OR</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <em>
                            <p className="flex lg:text-lg md:text-sm mx-2 my-5 text-slate-600 tracking-wide">
                                {`Full Stack Developer with a
                                            particular passion for blending
                                            front-end creativity with technical
                                            precision to create compelling
                                            digital experiences.`}
                            </p>
                        </em>
                        <aside className="m-2 text-slate-500">
                            {`Outside of work, you can find me `}
                            <span className="font-bold text-cyan-500">
                                <a href="https://www.powells.com/">
                                    {` reading `}
                                </a>
                            </span>
                            {` at the park,`}
                            <span className="font-bold text-cyan-500">
                                <a href="https://www.oregonhikers.org/field_guide/Main_Page">
                                    {` hiking around Oregon `}
                                </a>
                            </span>
                            {` with my husband, or cheering on the `}
                            <span className="font-bold text-cyan-500 hover:text-green-700 hover:bg-slate-800">
                                <a href="https://www.timbers.com/thornsfc/schedule/">
                                    {` Portland Thorns. `}
                                </a>
                            </span>
                        </aside>
                    </div>
                </div>
                <div className="w-full mr-2 flex flex-col justify-between">
                    <ul className="mx-4 flex flex-wrap">
                        <li className="skill-buttons">JavaScript</li>
                        <li className="skill-buttons">HTML</li>
                        <li className="skill-buttons">CSS</li>
                        <li className="skill-buttons">SCSS</li>
                        <li className="skill-buttons">TypeScript</li>

                        <li className="skill-buttons">React</li>
                        <li className="skill-buttons">Next.js</li>
                        <li className="skill-buttons">Tailwind</li>
                        <li className="skill-buttons">Bootstrap</li>
                        <li className="skill-buttons">Material UI</li>

                        <li className="skill-buttons">Git</li>
                        <li className="skill-buttons">Github</li>
                        <li className="skill-buttons">Vercel</li>
                        <li className="skill-buttons">Figma</li>
                        <li className="skill-buttons">Canva</li>
                    </ul>
                </div>
                <div className="w-full my-2 mr-2 flex flex-col justify-between">
                    <div className="flex justify-center">
                        <a
                            href="https://www.linkedin.com/in/kendallcercone"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                className="icons m-5"
                                size={30}
                                style={{
                                    color: "rgb(14 116 144)",
                                }}
                            />
                        </a>
                        <a
                            href="https://www.github.com/kendalljk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare
                                className="icons m-5"
                                size={30}
                                style={{
                                    color: "rgb(14 116 144)",
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
