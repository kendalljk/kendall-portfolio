export default function Project({ title, video, description, link }) {

  const goToProject = () => {
window.location.href = link;
}

    return (
        <figure className="lg:w-2/3 md:w-full py-5">
            <h1 onClick={goToProject} className="hover:text-sky-700 hover:cursor-pointer">{title}</h1>
            <video src={video} controls className="w-full"></video>
            <figcaption>{description}</figcaption>
        </figure>
    );
}
