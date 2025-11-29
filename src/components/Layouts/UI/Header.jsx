import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
          : ""
      } w-[90%] font-outfit rounded-[10px] max-w-full flex items-center justify-between flex-wrap mx-[5%] p-[20px] fixed top-[15px] left-0 z-[999] transition-all duration-300`}
    >
      {/* Logo */}
      <NavLink to="/">
        <img
          src={isScrolled ? "/images/primary.png" : "/images/SG-white.png"}
          loading="lazy"
          alt="logo"
          className="w-[200px] h-[50px] transition-all duration-300"
        />
      </NavLink>

      {/* Navbar */}
      <div>
        <ul
          className={`${
            menuActive ? "right-0" : "right-[-300px]"
          } flex items-center justify-center max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:fixed max-lg:top-0 max-lg:h-screen max-lg:w-[300px] max-lg:bg-[#e3f6f3] max-lg:shadow-[0_40px_60px_rgba(0,0,0,0.1)] max-lg:pt-20 pl-[10px] max-lg:transition-all max-lg:duration-300`}
          id="navbar"
        >
          <li className="list-none px-[20px] mb-[25px] lg:mb-0">
            <NavLink
              to="/"
              onClick={() => setMenuActive(false)}
              className={`text-[16px] font-semibold ${
                isScrolled ? "text-[#065b69]" : "text-white max-lg:text-primary"
              }`}
            >
              Home
            </NavLink>
          </li>

          <li className="list-none px-[20px] mb-[25px] lg:mb-0">
            <NavLink
              to="/about"
              onClick={() => setMenuActive(false)} // 👈 important
              className={`text-[16px] font-semibold ${
                isScrolled ? "text-[#065b69]" : "text-white max-lg:text-primary"
              }`}
            >
              About Us
            </NavLink>
          </li>

          <li className="list-none px-[20px] mb-[25px] lg:mb-0">
            <NavLink
              to="/project"
              onClick={() => setMenuActive(false)}
              className={`text-[16px] font-semibold ${
                isScrolled ? "text-[#065b69]" : "text-white max-lg:text-primary"
              }`}
            >
              Project
            </NavLink>
          </li>

          <li className="list-none px-[20px] mb-[25px] lg:mb-0">
            <NavLink
              to="/services"
              onClick={() => setMenuActive(false)}
              className={`text-[16px] font-semibold ${
                isScrolled ? "text-[#065b69]" : "text-white max-lg:text-primary"
              }`}
            >
              Services
            </NavLink>
          </li>

          {/* Close icon (mobile only) */}
          <i
            className="absolute top-[30px] left-[30px] text-[#065b69] text-[24px] lg:hidden cursor-pointer"
            onClick={() => setMenuActive(false)}
          >
            <IoMdClose />
          </i>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex lg:hidden items-center">
        <i
          className="text-[#065b69] text-[24px] pl-[20px] cursor-pointer"
          onClick={() => setMenuActive(true)}
        >
          <FaBars />
        </i>
      </div>
    </header>
  );
};
