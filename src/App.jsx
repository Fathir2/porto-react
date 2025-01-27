
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
import MusicBox from './components/MusicBox.jsx';

const App = () => {

  useGSAP(() => {
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
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Porto />
      </main>
      <footer>
        <Footer />
      </footer>
      <MusicBox />
    </ReactLenis>
  );
}

export default App;
