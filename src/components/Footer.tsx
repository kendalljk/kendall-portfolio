import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full flex justify-center gap-10 mt-10 mb-5">
            <a
                href="https://www.linkedin.com/in/kendallcercone"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin
                    className="text-orange-300 hover:text-orange-400"
                    size={30}
                />
            </a>
            <a
                href="https://www.github.com/kendalljk"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithubSquare
                    className="text-orange-300 hover:text-orange-400"
                    size={30}
                />
            </a>
        </div>
    );
}
