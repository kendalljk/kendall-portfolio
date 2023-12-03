"use client";
import profilePic from "../app/resources/kendall.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToAbout = () => {
      router.push('/about')
    };

    return (
        <main className="flex flex-col min-h-screen min-w-full ">
            <div className="w-full flex flex-col items-center justify-center mt-20">
                <Image
                    src={profilePic}
                    alt="Kendall Cercone photo"
                    width={250}
                    className="rounded-full mx-2 mt-10"
                />
                <div className="flex flex-col items-center text-center mt-5">
                    <div>
                        <h1 className="text-4xl text-forest-green">
                            Kendall Cercone
                        </h1>
                        <h2 className="text-2xl text-sage-green">
                            Full Stack Web Developer
                        </h2>
                    </div>
                    <hr className="w-1/2 border-2 border-sage-green my-10" />
                    <div className="w-2/3">
                        <p className="">
                            <i>
                                Illinois based web developer driven by a fusion
                                of creativity and a relentless pursuit to solve
                                complex challenges. I strive to create visually
                                captivating designs while enriching the user
                                experience with depth and innovation.
                            </i>{" "}
                            Outside, of work you can find me{" "}
                            <a
                                href="https://www.traillink.com/trailsearch/?zipcode=60201"
                                className="hover:font-bold hover:italic hover:text-apricot"
                            >
                                biking the trails
                            </a>{" "}
                            with my husband,{" "}
                            <a
                                href="https://next-shelf-help.vercel.app/"
                                className="hover:font-bold hover:italic hover:text-apricot"
                            >
                                reading on my balcony
                            </a>
                            , or cheering on the{" "}
                            <a
                                href="https://chicagoredstars.com/schedule"
                                className="hover-text-red hover:italic hover:font-bold"
                            >
                                Chicago Red Stars.
                            </a>
                        </p>
                    </div>
                    <div>
                        <button
                            className="bg-sage-green hover:bg-vibrant-sage-green
                active:bg-forest-green
                focus:outline-none
                focus:ring
                focus:ring-sage-green
                disabled:bg-gray-400
                disabled:cursor-not-allowed
                text-white
                py-2
                px-4
                rounded-full
                items-center
                w-fit m-auto mt-10"
                            onClick={goToAbout}
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
