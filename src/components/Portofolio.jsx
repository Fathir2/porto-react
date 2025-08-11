/**
 * import project
 */
import ProjectCard from "./PortofolioCard";
import School from "../images/SellMate.png";
import GalleryApp from "../images/gallery-web.png";
import UrlShort from "../images/url-short.png";
import AniFinder from "../images/AniFinder.png";

const Works = [
  {
    title: "SellMate - TEFA E-Commerce",
    tags: ["Laravel", "React", "MySQL"],
    image: School,
    description: "This project was developed by me and my team during my internship at PT Chlorine Digital Media, aiming to deliver a seamless e-commerce experience with a user-friendly interface and a robust Laravel + React-based architecture.",
    link: "https://github.com/barrrliebert/SellMate",
  },
  {
    title: "Gallery-school App ",
    tags: ["ReactJS", "TailwindCSS", "MySQL"],
    image: GalleryApp,
    description: "A web application designed to showcase school events and activities, built with ReactJS and styled using TailwindCSS. It features a responsive design and dynamic content management.",
    link: "https://github.com/Fathir2/react-gallery",
  },
  {
    title: "Url-short using Laravel",
    tags: ["Laravel", "PHP", "MySQL"],
    image: UrlShort,
    description: "A URL shortening service built with Laravel, allowing users to create short links for long URLs. It includes features like link tracking and analytics.",
    link: "https://github.com/Fathir2/url-short-laravel",
  },
  {
    title: "AniFinder - Anime Search App",
    tags: ["HTML", "CSS", "Vanilla JS"],
    image: AniFinder,
    link: "https://github.com/Fathir2/anifinder",
    description: "A simple web application that allows users to search for anime using an external API. Built with HTML, CSS, and Vanilla JavaScript, it provides a clean and responsive interface.",
  },
  // Add more projects as needed
];

const Porto = () => {
  return (
    <section className="section mb-12" id="portofolio">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portofolio</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {Works.map(({ title,description, image, tags, link }, key) => (
            <ProjectCard
              key={key}
              image={image}
              title={title}
              description={description}
              tags={tags}
              link={link}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Porto;
