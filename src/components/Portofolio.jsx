/**
 * import project
 */
import ProjectCard from "./PortofolioCard";
import School from "../images/school-app.png";
import GalleryApp from "../images/gallery-web.png";
import UrlShort from "../images/url-short.png";

const Works = [
  {
    title: "School App using Flutter",
    tags: ["Flutter", "Dart", "MySQL"],
    image: School,
    link: "https://github.com/Fathir2/flutter-view-tugas4",
  },
  {
    title: "Gallery-school App ",
    tags: ["ReactJS", "TailwindCSS", "MySQL"],
    image: GalleryApp,
    link: "https://github.com/Fathir2/react-gallery",
  },
  {
    title: "Url-short using Laravel",
    tags: ["Laravel", "PHP", "MySQL"],
    image: UrlShort,
    link: "https://github.com/Fathir2/url-short-laravel",
  },
];

const Porto = () => {
  return (
    <section className="section" id="portofolio">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portofolio</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {Works.map(({ title, image, tags, link }, key) => (
            <ProjectCard
              key={key}
              image={image}
              title={title}
              tags={tags}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Porto;
