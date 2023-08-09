import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen align-middle justify-around">
            <h1 className="text-center">Contact</h1>
            <div className="flex justify-center gap-5 text-teal-900">
                <FaLinkedin size={40} />
                <FaGithubSquare size={40} />
            </div>
        </div>
    );
}
