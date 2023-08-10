import Navigation from "@@component/component/components/Navigation";
import Image from "next/image";
import profilePic from "../icons/photos/kendall.png";

export default function About() {
    return (
        <div>
            <Navigation />
            <div className="home flex min-h-screen flex-col items-center justify-center">
                <div className="flex flex-col w-1/2 p-2 border-4">
                    <div className="flex">
                        <Image
                            src={profilePic}
                            alt="Kendall Cercone photo"
                            width={200}
                            max-height={100}
                            className="rounded-full"
                        />
                        <div className="flex flex-col justify-center mx-4">
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
                    <div className="flex justify-center font-oswald">
                        <ul className="w-1/3 my-4">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                        </ul>
                        <p className="w-full my-4 px-5 self-start text-slate-500">
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
    );
}
