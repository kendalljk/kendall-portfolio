"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm(
        process.env.FORMSPREE_ENDPOINT as string
    );

    if (state.succeeded) {
        return (
            <div className="flex justify-center text-center pt-20">
                <div className="border-2 border-sage-green p-5 rounded">
                    <h2 className="text-4xl text-forest-green py-5">Message successfully sent!</h2>
                    <p>{`Thanks for reaching out, I will be in touch soon!`}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center py-20">
            <div className="lg:w-1/3 w-1/2">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="name" className="font-bold text-slate-gray">
                        Full Name:
                    </label>
                    <input
                        id="name"
                        type="name"
                        name="name"
                        required
                        className="mb-2 p-1"
                    />
                    <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                    />
                    <label
                        htmlFor="email"
                        className="font-bold text-slate-gray"
                    >
                        Email Address:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="mb-2 p-1"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label
                        htmlFor="telephone"
                        className="font-bold text-slate-gray"
                    >
                        Phone number:
                    </label>
                    <input
                        id="telephone"
                        type="tel"
                        name="telephone"
                        required
                        className="mb-2 p-1"
                    />
                    <ValidationError
                        prefix="telephone"
                        field="telephone"
                        errors={state.errors}
                    />
                    <label
                        htmlFor="message"
                        className="font-bold text-slate-gray"
                    >
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={3}
                        required
                        className="p-1"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="bg-sage-green hover:bg-vibrant-sage-green
                active:bg-forest-green
                focus:outline-none
                focus:ring
                focus:ring-sage-green
                disabled:bg-gray-400
                disabled:cursor-not-allowed
                text-white
                font-bold
                py-2
                px-4
                rounded-full
                items-center
                w-fit m-auto my-10"
                    >
                        Submit
            </button>
            <div className="flex justify-center italic text-4xl text-apricot mt-10">
              <h2>Thanks for stopping by!</h2>
            </div>
                </form>
            </div>
        </div>
    );
}
