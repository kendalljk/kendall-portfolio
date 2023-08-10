import Navigation from "@@component/component/components/Navigation";
import Image from "next/image";
import profilePic from "../icons/photos/kendall.png";

export default function About() {
    return (
        <div>
            <Navigation />
            <div className="home flex min-h-screen flex-col items-center justify-center">
                <div className="flex w-2/3">
                    <Image
                        src={profilePic}
                        alt="Kendall Cercone photo"
                        width={200}
                        height={100}
                        className="rounded-full"
                    />
                    <div className="flex flex-col justify-center mx-4">
                        <h1 className="text-4xl">Kendall Cercone</h1>
                        <h2>Portland, OR</h2>
                        <h3 className="text-xl self-start my-4 text-slate-700">
                            Full Stack Developer with a particular passion for
                            blending front-end creativity with technical
                            precision to create compelling digital experiences.
                        </h3>
                    </div>
                </div>
                <div className=" max-w-5xl w-2/3 items-center flex flex-col align-middle font-oswald">
                    <p className="w-full my-4 self-start text-slate-500">
                        Hey, I'm Kendall. What started as a hobby turned into a
                        passionate pursuit, propelling me into the dynamic world
                        of technology. With a background in healthcare and communication, I've
                        learned the importance of attention to detail and a
                        resillient and collaborative approach to
                        problem-solving. Now, as I dive into coding, I'm excited
                        to bring that same dedication to creating innovative and
                        user-centered web experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}
