"use client";
import Navigation from "@@component/component/components/Navigation";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm(
        process.env.FORMSPREE_ENDPOINT as string
    );
    if (state.succeeded) {
        return alert(
            <div>
                <h2>Speak Soon!</h2>
                <p>{`Message successfully sent. I will be in touch soon!`}</p>
            </div>
        );
    }
    return (
        <div>
            <Navigation />
            <div className="flex flex-col min-h-screen align-middle justify-between items-center">
                <div className="lg:w-1/3 w-1/2 text-2xl">
                    <h1 className="text-3xl uppercase text-cyan-700 text-center pt-20">
                        Contact Me
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="font-bold">
                            Full Name:
                        </label>
                        <input id="name" type="name" name="name" required />
                        <ValidationError
                            prefix="name"
                            field="name"
                            errors={state.errors}
                        />
                        <label htmlFor="email" className="font-bold">
                            Email Address:
                        </label>
                        <input id="email" type="email" name="email" required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="telephone" className="font-bold">
                            Phone number:
                        </label>
                        <input
                            id="telephone"
                            type="tel"
                            name="telephone"
                            required
                        />
                        <ValidationError
                            prefix="telephone"
                            field="telephone"
                            errors={state.errors}
                        />
                        <label htmlFor="message" className="font-bold">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="block mx-auto mt-20 bg-cyan-700 py-2 px-4 rounded-2xl text-slate-50 hover:font-bold"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="flex justify-center gap-20 mb-20">
                    <a
                        href="https://www.linkedin.com/in/kendallcercone"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin
                            size={50}
                            style={{
                                color: "rgb(14 116 144)",
                            }}
                            className="icons"
                        />
                    </a>
                    <a
                        href="https://www.github.com/kendalljk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubSquare
                            size={50}
                            style={{
                                color: "rgb(14 116 144)",
                            }}
                            className="icons"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
