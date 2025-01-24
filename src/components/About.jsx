
import { FaCode, FaLaptopCode, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../images/logo.svg';

const About = () => {
  const aboutItems = [
    {
      label: 'Projects Completed',
      number: 2,
      icon: <FaCode className="text-sky-400 text-3xl" />,
    },
    {
      label: 'Years Experience',
      number: 3,
      icon: <FaLaptopCode className="text-sky-400 text-3xl" />,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={28} />,
      url: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={28} />,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <FaInstagram size={28} />,
      url: 'https://instagram.com/yourusername',
      label: 'Instagram',
    }
  ];

  return (
    <section id="about" className="section bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-zinc-800 rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full reveal-up md:w-1/2">
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-6 text-left">
                Welcome! I&apos;m Fathir, a passionate full-stack developer dedicated to crafting efficient, visually appealing, and user-focused digital solutions. With a keen eye for detail and a love for clean code, I strive to create impactful web experiences.
              </p>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-5 text-left">
                Contact me if you want to collaborate!
              </p>
              <div className="py-0 mb-2">
                <div className="flex items-center gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-sky-400 transition-colors duration-300"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {aboutItems.map(({ label, number, icon }, key) => (
                  <div key={key} className="bg-zinc-700 p-6 rounded-xl">
                    <div className="flex justify-center items-center mb-4">
                      {icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-100 mb-2">
                      {number}
                      <span className="text-sky-400">+</span>
                    </div>
                    <p className="text-base text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <img
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              style={{ filter: 'invert(100%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;