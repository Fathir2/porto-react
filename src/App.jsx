/**
 * import React hooks
 */
import { useState, useEffect } from 'react';

/**
 * import gsap 
 */
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { ReactLenis } from 'lenis/react'

/**
 * add plugin gsap
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * components
 * 
 */
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Porto from './components/Portofolio.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx';

import LoadingScreen from './components/LoadingScreen.jsx';

const App = () => {
  // State untuk mengontrol loading screen
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Setup GSAP animations
  useGSAP(() => {
    // Hanya jalankan animasi setelah loading selesai
    if (!isLoading) {
      const elements = gsap.utils.toArray('.reveal-up');

      elements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            scrub: true,
            start: '-200 bottom',
            end: 'bottom 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        })
      })
    }
  }, [isLoading]); // Dependency array untuk re-run ketika isLoading berubah

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setContentLoaded(true);
  };

  // Preload critical assets (opsional)
  useEffect(() => {
    // Jika Anda ingin preload gambar atau aset tertentu
    const preloadAssets = async () => {
      // Contoh preload gambar penting
      const imagesToPreload = [
        // '/path/to/hero-image.jpg',
        // '/path/to/profile-photo.jpg',
        // Tambahkan path gambar yang perlu di-preload
      ];

      if (imagesToPreload.length > 0) {
        const promises = imagesToPreload.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // tetap resolve meski error
            img.src = src;
          });
        });

        await Promise.all(promises);
      }
      
      // Set minimum loading time (opsional)
      setTimeout(() => {
        setContentLoaded(true);
      }, 1000); // Minimum 1 detik loading
    };

    preloadAssets();
  }, []);

  // Render loading screen atau main content
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`transition-opacity duration-1000 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Porto />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </ReactLenis>
    </div>
  );
}

export default App;