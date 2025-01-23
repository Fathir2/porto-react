


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

const App = () => {
  return (
    <>
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
   </>
  );
}

export default App;
