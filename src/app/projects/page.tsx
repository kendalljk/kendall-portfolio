"use client";
import Project from "@@component/component/components/Project";

export default function Projects() {
    return (
        <div className="flex flex-col items-center">
            <Project
                link={"https://next-shelf-help.vercel.app/"}
                image={"/shelf-help.jpg"}
                title={"Shelf Help"}
                video={"/shelf-help-walkthrough.mp4"}
                description={
                    "This application is a comprehensive digital solution for book enthusiasts, designed to create a personalized and interactive reading experience. Organize your reading journey effectively, with features tailored for exploration, organization, and personal reflection."
                }
                keyFeatures={[
                    "Search for books by title or author, making discovering new reads and finding specific books a seamless experience.",
                    "Whether it's 'Reading', 'Read', or 'To Be Read', organize your library in a way that suits your reading habits.",
                    "Save and categorize favorite notes, quotes, and thoughts from each book, making it easy to revisit and reflect on key takeaways and insights.",
                    "Designed with simplicity and ease of use in mind, the app's interface encourages exploration and interaction without overwhelming the user.",
                ]}
                languages={
                    "Open Library Api, Next.js, React.js, MongoDB, Tailwind"
                }
            />
            <Project
                link={"https://photography-portfolio-auwj.vercel.app/"}
                image={"/bk-photo.jpg"}
                title={"BK Photography"}
                video={"/photography-walkthrough.mp4"}
                description={
                    "This project highlights my ability to blend aesthetics with functionality, creating an online space that not only showcases the photographer's work but also enhances their professional presence. The website is built with a responsive design, ensuring optimal viewing across all devices"
                }
                keyFeatures={[
                    "The homepage greets visitors with a visually striking slideshow that rotates through a curated selection of the photographer's favorite photos along with highlighting their most recent projects",
                    "The website employs an elegant masonry layout for photo albums and galleries, ensuring that each photograph is displayed in its proper orientation without compromising image quality.",
                    "A user-friendly contact form is integrated into the site, allowing potential clients to easily reach out to the photographer.",
                ]}
                languages={"Flickr API, SendGrid, Next.js, React.js, Tailwind"}
            />
        </div>
    );
}
