import "./Header.css"

import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false); // <-- mobile menu ke liye state

  // scroll bg change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <NavLink to="/">
        <img src="/images/logo.png" loading="lazy" alt="logo" />
      </NavLink>

      {/* Desktop Navbar */}
      <div>
        <ul className={`navbar ${menuActive ? "active" : ""}`} id="navbar">
          <li className="ac-h-e">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="ac-h-e">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="ac-h-e">
            <NavLink to="/project">Project</NavLink>
          </li>
          <li className="ac-h-e">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="ac-h-e">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <i 
            className="close" 
            onClick={() => setMenuActive(false)}  // ❌ remove active
          >
            <IoMdClose />
          </i>
        </ul>
      </div>

      {/* Mobile Navbar Toggle */}
      <div className="mobile" id="mobile">
        <i onClick={() => setMenuActive(true)} id="bar">
          <FaBars />
        </i>
      </div>
    </header>
  );
};
