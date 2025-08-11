import Avatar from "../images/hero-avatar.jpg";
import hero from "../images/hero-banner.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv2.pdf";
    link.download = "cv2.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="pt-28 lg:pt-36 bg-zinc-900 min-h-screen flex items-center"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-4 bg-zinc-800/50 p-3 rounded-full w-fit">
              <figure className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-300">
                <img
                  src={Avatar}
                  width={48}
                  height={48}
                  alt="Fathir"
                  className="img-cover"
                />
              </figure>
              <div className="text-gray-200 text-lg font-medium">
                Available for freelance work
              </div>
            </div>
            <h2 className="bg-gradient-to-r from-gray-300 to-gray-700 bg-clip-text text-transparent text-5xl lg:text-6xl font-bold leading-tight">
              Crafting thoughtful design and scalable code for modern web
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed -mt-2">
              Freelance Fullstack Developer & UI/UX Designer focused on user
              experience, clean code, and impactful digital products.
            </p>
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-gray-300 to-gray-700 text-zinc-900 font-semibold py-3 px-6 
            rounded-full hover:from-gray-400 hover:to-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Download CV
              </button>
              <a
                href="#contact"
                className="bg-zinc-800 text-gray-300 font-semibold py-3 px-6 
            rounded-full hover:bg-zinc-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-5/12">
            <div className="relative w-full max-w-md mx-auto">
              <figure className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={hero}
                  alt="Fathir Sagtiana"
                  className="img-cover w-full h-full object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50"></div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
