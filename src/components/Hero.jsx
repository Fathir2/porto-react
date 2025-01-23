

import Avatar from "../images/hero-avatar.jpg";
import hero from "../images/hero-banner.jpg";

const Hero = () => {


  return (
    <section className="pt-28 lg:pt-36 bg-zinc-900 min-h-screen flex items-center" id="home">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      {/* Kolom kiri */}
      <div className="lg:w-1/2 space-y-6"> {/* Ubah space-y-8 menjadi space-y-6 */}
        {/* Avatar dan text */}
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
  
        {/* Heading */}
        <h2 className="bg-gradient-to-r from-gray-300 to-gray-700 bg-clip-text text-transparent text-5xl lg:text-6xl font-bold leading-tight">
          Building scalable and maintainable web for future
        </h2>
  
        {/* Subheading */}
        <p className="text-gray-400 text-xl leading-relaxed -mt-2"> {/* Tambahkan -mt-2 di sini */}
          Passionate web developer crafting innovative solutions for tomorrows digital landscape.
        </p>
  
        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8"> {/* Tambahkan mt-8 di sini */}
          <button
            onClick={() => window.open("/path-to-your-cv.pdf", "_blank")}
            className="bg-gradient-to-r from-gray-300 to-gray-700 text-zinc-900 font-semibold py-3 px-6 
            rounded-full hover:from-gray-400 hover:to-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Download CV
          </button>
          <a href="#contact" className="bg-zinc-800 text-gray-300 font-semibold py-3 px-6 
            rounded-full hover:bg-zinc-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
  
  
        {/* Kolom kanan - Hero image */}
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