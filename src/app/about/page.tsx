import Navigation from "@@component/component/components/Navigation";
import Image from "next/image";
import profilePic from "../icons/photos/kendall.png";

export default function About() {
    return (
        <div>
            <Navigation />
            <div className="home flex min-h-screen flex-col items-center justify-center overflow-auto">
                <div className="flex flex-col w-1/2 p-2 border-4">
                    <div className="flex w-full border-2 py-2">
                        <div className="w-1/3">
                            <Image
                                src={profilePic}
                                alt="Kendall Cercone photo"
                                width={200}
                                max-height={100}
                                className="rounded-full mx-2"
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-center mx-4">
                            <h1 className="text-4xl">Kendall Cercone</h1>
                            <h2>Portland, OR</h2>
                            <em>
                                <h3 className="text-xl self-start my-2 text-slate-700">
                                    Full Stack Developer with a particular
                                    passion for blending front-end creativity
                                    with technical precision to create
                                    compelling digital experiences.
                                </h3>
                            </em>
                        </div>
                    </div>
                    <div className="flex w-full justify-center font-oswald">
                        <div className="w-1/3">
                            <ul className="m-4">
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SCSS</li>

                                <li>React</li>
                                <li>Next.js</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                                <li>Material UI</li>

                                <li>Git</li>
                                <li>Github</li>
                                <li>Vercel</li>
                                <li>Figma</li>
                                <li>Canva</li>
                            </ul>
                        </div>
                        <div className="w-2/3">
                            <p className="my-4 self-start text-slate-500">
                                {`Hey, I'm Kendall. What started as a hobby turned
                            into a passionate pursuit, propelling me into the
                            dynamic world of technology. With a background in
                            healthcare and communication, I've learned the
                            importance of attention to detail and a resillient
                            and collaborative approach to problem-solving. Now,
                            as I dive into coding, I'm excited to bring that
                            same dedication to creating innovative and
                            user-centered web experiences.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
