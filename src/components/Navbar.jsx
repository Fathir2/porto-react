
/**
 *
 * node modules
 *
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ NavOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
    activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
    activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
    activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    activeBox.current.style.top = `${event.target.offsetTop}px`;
    activeBox.current.style.left = `${event.target.offsetLeft}px`;
    activeBox.current.style.width = `${event.target.offsetWidth}px`;
    activeBox.current.style.height = `${event.target.offsetHeight}px`;


  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Skills",
      link: "#skills",
      className: "nav-link",
    },
    {
      label: "Portfolio",
      link: "#portofolio",
      className: "nav-link",
    },
  ];
  return (
    <nav className={"navbar" + (NavOpen ? " open" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a key={key} 
        href={link} 
        className={className} 
        ref={ref} 
        onClick={activeCurrentLink}>
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  NavOpen: PropTypes.bool,
};

export default Navbar;
