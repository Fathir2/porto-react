

/**
 *
 * Components
 *
 */

import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "../images/logo.svg";

const Header = () => {  
  const [NavOpen, setNavOpen] = useState(false);


  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex z-40 items-center 
       bg-gradient-to-b from-zinc-900-to-zinc-900/0"
    >
      <div
        className="max-w-screen-2xl w-full mx-auto px-4 flex 
     justify-between md:px-6 items-center md:grid md:grid-cols-[1fr,3fr,1fr]"
      >
        <h1>
          <a href="/" className="logo">
            <img
              src={Logo}
              width={45}
              height={45}
              className="font-white"
              style={{ filter: "invert(100%)" }} // Menambahkan filter untuk mengubah warna menjadi putih
              alt="Fathir"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button className="md:hidden menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
          <span className="material-symbols-rounded">
  {NavOpen ? "close" : "menu"}
</span>
          </button>

          <Navbar NavOpen={NavOpen} />
        </div>

       
      </div>
    </header>
  );
};

export default Header;
