import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 transition-opacity duration-800 ${
        !isVisible ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Grid Pattern - sama seperti portfolio */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo/Brand - menggunakan logo sederhana seperti di navbar */}
        <div className="mb-12">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            {/* Logo yang sama seperti di navbar */}
            <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-6 h-6 bg-white transform -rotate-45"></div>
            </div>
          </div>
          <h1 className="text-3xl font-light text-white mb-3 tracking-wide">
            Fathir
          </h1>
          <p className="text-zinc-400 text-sm font-light tracking-wider uppercase">
            Loading Experience
          </p>
        </div>

        {/* Minimalist Progress Bar */}
        <div className="w-full max-w-xs mx-auto mb-8">
          <div className="flex justify-between text-xs text-zinc-500 mb-3 font-light">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-px bg-zinc-800 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text with dots animation */}
        <div className="text-zinc-500 text-sm font-light">
          <div className="flex items-center justify-center space-x-2">
            <span>Preparing your experience</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse"></div>
              <div
                className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
      </div>

      {/* Version or copyright text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-zinc-600 text-xs font-light">© 2024 Web Developer</p>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
