import {
  FaCode,
  FaLaptopCode,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../images/logo.svg";

const About = () => {
  const aboutItems = [
    {
      label: "Projects Completed",
      number: 4,
      icon: <FaCode className="text-sky-400 text-3xl" />,
    },
    {
      label: "Years Experience",
      number: 1,
      icon: <FaLaptopCode className="text-sky-400 text-3xl" />,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={28} />,
      url: "https://github.com/Fathir2",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={28} />,
      url: "https://www.linkedin.com/in/muhammad-fathir-sagtiana-b109b8319/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={28} />,
      url: "https://www.instagram.com/sagtiana_f/",
      label: "Instagram",
    },
  ];

  return (
    <section id="about" className="section bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-zinc-800 rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Column - About Text */}
            <div className="w-full md:w-2/3">
              <div className="bg-zinc-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                 Welcome! I&apos;m Muhammad Fathir Sagtiana — a freelance Fullstack Developer and UI/UX Designer 
who’s passionate about building user-centric, functional, and visually engaging digital products. 
Combining clean code with thoughtful design, I&apos;m to deliver seamless web experiences that not only work great, but look great too.

                </p>
                <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                  Contact me if you want to collaborate!
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="w-full md:w-1/3">
              <div className="space-y-6">
                {aboutItems.map(({ label, number, icon }, key) => (
                  <div
                    key={key}
                    className="bg-zinc-700 p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-zinc-700/80"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-zinc-800/50 rounded-lg">
                        {icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">
                          {number}
                          <span className="text-sky-400">+</span>
                        </div>
                        <p className="text-zinc-400">{label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="mt-12 flex justify-center">
            <img
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "invert(100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
