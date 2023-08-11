import Navigation from "@@component/component/components/Navigation";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Contact() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-col min-h-screen align-middle justify-around items-center">
                <div className="flex flex-col text-center w-1/3 h-96 border-2">
            <h1 className="flex flex-col text-2xl border-2">{`Let's Chat!`}</h1>
            <div className="flex flex-col h-full my-10 justify-between">
                    <p>
                        Feel free to reach out. You can get in touch by dropping
                        me a line at:
                    </p>
                    <h2 className="text-2">kendall.cercone@gmail.com</h2>
            </div>
                </div>
                <div className="flex justify-center gap-20 text-teal-900">
                    <a
                        href="https://www.linkedin.com/in/kendallcercone"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={40} />
                    </a>
                    <a
                        href="https://www.github.com/kendalljk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubSquare size={40} />
                    </a>
                </div>
            </div>
        </div>
    );
}
