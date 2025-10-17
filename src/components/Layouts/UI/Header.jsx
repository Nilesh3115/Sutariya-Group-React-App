// import "./Header.css";

// import { FaBars } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// export const Headers = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuActive, setMenuActive] = useState(false); // <-- mobile menu ke liye state

//   // scroll bg change
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     // <header
//     //   className={
//     //     isScrolled
//     //       ? "bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-primary"
//     //       : "w-[90%] text-white max-w-full flex items-center justify-between flex-wrap mx-[5%] p-5 fixed top-[15px] left-0 z-[999]"
//     //   }
//     // >
//       <header className={isScrolled ? "w-[90%] text-primary max-w-full flex items-center justify-between flex-wrap mx-[5%] p-5 fixed top-[15px] left-0 z-[999] bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]" : "w-[90%] max-w-full flex items-center justify-between flex-wrap mx-[5%] p-5 fixed top-[15px] left-0 z-[999] text-white"}>
//       <NavLink to="/">
//         <img
//           className="w-[160px] h-[36px]"
//           src="/images/logo.png"
//           loading="lazy"
//           alt="logo"
//         />
//       </NavLink>

//       {/* Desktop Navbar */}
//       <div>
//         <ul
//           className={`flex items-center justify-center max-lg:flex max-lg:flex-col max-lg:items-start max-lg:justify-start max-lg:fixed max-lg:top-0 max-lg:right-[-300px] max-lg:h-screen max-lg:w-[300px] max-lg:bg-[#e3f6f3] max-lg:shadow-[0_40px_60px_rgba(0,0,0,0.1)] max-lg:pt-20 max-lg:pl-[10px] transition duration-300 ${
//             menuActive ? "max-lg:z-[9999]" : "max-lg:right-[-300px]"
//           }`}
//           id="navbar"
//         >
//           <li className="list-none px-5 relative max-lg:mb-[25px]">
//             <NavLink to="/" className="text-[16px] font-semibold max-lg:text-primary">
//               Home
//             </NavLink>
//           </li>
//           <li className="list-none px-5 relative max-lg:mb-[25px]">
//             <NavLink to="/about" className="text-[16px] font-semibold max-lg:text-primary">
//               About Us
//             </NavLink>
//           </li>
//           <li className="list-none px-5 relative max-lg:mb-[25px]">
//             <NavLink to="/project" className="text-[16px] font-semibold max-lg:text-primary">
//               Project
//             </NavLink>
//           </li>
//           <li className="list-none px-5 relative max-lg:mb-[25px]">
//             <NavLink to="/services" className="text-[16px] font-semibold max-lg:text-primary">
//               Services
//             </NavLink>
//           </li>
//           <li className="list-none px-5 relative max-lg:mb-[25px]">
//             <NavLink to="/contact" className="text-[16px] font-semibold max-lg:text-primary">
//               Contact
//             </NavLink>
//           </li>
//           <i
//             className="max-lg:absolute max-lg:top-[30px] max-lg:left-[30px] max-lg:text-primary max-lg:text-[24px] hidden"
//             onClick={() => setMenuActive(false)} // ❌ remove active
//           >
//             <IoMdClose />
//           </i>
//         </ul>
//       </div>

//       {/* Mobile Navbar Toggle */}
//       <div className="hidden items-center max-lg:flex" id="mobile">
//         <i onClick={() => setMenuActive(true)} id="bar">
//           <FaBars />
//         </i>
//       </div>
//     </header>
//   );
// };

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
          src="/images/logo.png"
          loading="lazy"
          alt="logo"
          className="w-[160px] h-[36px]"
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
              className={`text-[16px] font-semibold ${
                isScrolled ? "text-[#065b69]" : "text-white max-lg:text-primary"
              }`}
            >
              Services
            </NavLink>
          </li>

          <li className="list-none px-[20px] mb-[25px] lg:mb-0">
            <NavLink
              to="/contact"
              className={`text-[16px] font-semibold ${
                isScrolled ? "text-[#065b69]" : "text-white max-lg:text-primary"
              }`}
            >
              Contact
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
