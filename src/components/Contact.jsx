import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portofolio").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="contact" className="min-h-scree text-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-left mb-12 md:mb-16">
          <h2 className="headline-2 mb-3 reveal-up">Get In Touch</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Whether you have a question, want to collaborate, or just want to
            say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-zinc-800 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-100">
                Let&apos;s Connect
              </h3>

              <div className="space-y-5 md:space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="bg-zinc-700/50 p-3 rounded-lg group-hover:bg-zinc-600/50 transition-colors">
                    <Mail className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-200 font-medium">
                      sagtiana27@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="bg-zinc-700/50 p-3 rounded-lg group-hover:bg-zinc-600/50 transition-colors">
                    <Phone className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-200 font-medium">
                      +62 895-6131-61565
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-zinc-700/50 p-3 rounded-lg group-hover:bg-zinc-600/50 transition-colors">
                    <MapPin className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-200 font-medium">
                      Bogor, West Java, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-zinc-700/50">
                <p className="text-gray-500 mb-4 text-sm">
                  Follow me on social media
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/muhammad-fathir-sagtiana-b109b8319/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/40 hover:bg-gray-700/40 p-3 rounded-lg transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com/Fathir2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/40 hover:bg-gray-700/40 p-3 rounded-lg transition-colors group"
                  >
                    <Github className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/sagtiana_f/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/40 hover:bg-gray-700/40 p-3 rounded-lg transition-colors group"
                  >
                    <Instagram className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-5 md:p-6">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <p className="text-gray-300 font-medium text-sm md:text-base">
                  Available for freelance work
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Currently accepting new projects and collaborations
              </p>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-100">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lets discuss how we can bring your vision to life with
              cutting-edge web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 hover:border-zinc-600/50 text-gray-200 font-medium py-3 px-6 md:px-8 rounded-lg transition-colors">
                Schedule a Call
              </button>
              <button
                onClick={scrollToPortfolio}
                className="bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-300 font-medium py-3 px-6 md:px-8 rounded-lg transition-colors border border-zinc-600/50 hover:border-zinc-700/50"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;