import "./Footer.css";
import { FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const Footers = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-12.5 3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] xl:py-[80px] 
        xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] md:px-[20px] 
        sm:py-[40px] sm:px-[20px] 
        font-outfit bg-black text-white w-full max-w-[1600px]"
    >
      {/* Footer-top */}
      <div className="flex items-start max-lg:items-start justify-center max-lg:justify-start gap-12.5 max-3xl:gap-[44px] max-2xl:gap-[36px] max-xl:gap-[27px] max-lg:gap-[30px] flex-wrap border-b-1 border-[#616161] pb-12.5">
        {/* Footer-col-f */}
        <div className="w-1/5 max-lg:w-full">
          <a href="/" className="footer-logo">
            <img
              className="w-[160px] h-[36px] mb-5"
              src="/images/logo.png"
              alt="Your Brand Logo"
            />
          </a>
          <p>
            We helps startup companies grow, with exceptional user experiences
            to stand out in the market.
          </p>
        </div>

        {/* Footer-col-s */}
        <div className="w-1/5 flex flex-col items-center justify-center gap-5 max-lg:w-[45%] max-lg:items-center">
          <h4 className="text-[18px] font-semibold">Explore</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/project">Projects</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </div>

        {/* Footer-col-s */}
        <div className="w-1/5 flex flex-col items-center justify-center gap-5 max-lg:w-[45%] max-lg:items-center">
          <h4 className="text-[18px] font-semibold">Our Ventures</h4>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href="https://sutariyainfotech.com/">Sutariya Infotech</a>
            </li>
            <li>
              <a href="https://itscholars.in/">IT Scholars</a>
            </li>
            <li>
              <a href="https://uniprint.in/">Uniprint</a>
            </li>
            <li>
              <a href="https://digiinvitation.com/">Digi Invitation</a>
            </li>
          </ul>
        </div>

        {/* footer-col-soc */}
        <div className="w-[28%] flex flex-col gap-5 max-lg:w-full max-lg:items-start">
          <h4 className="text-[18px] font-semibold">Stay in Touch</h4>
          <div className="flex items-center gap-[15px] text-[25px]">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
            <a href="#">
              <FaBehance />
            </a>
          </div>
          {/* Subscribe */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <input
              className="px-[18px] py-[12px] rounded-[99px] border-1 border-white bg-black text-white outline-none w-[48%] max-2xl:w-full"
              type="email"
              placeholder="Enter Your Mail"
            />
            <button className="px-[18px] py-[12px] rounded-[99px] border-1 border-white bg-black text-white outline-none w-[48%] flex items-center justify-center gap-2.5 cursor-pointer hover:bg-primary hover:border-none transition-colors duration-300 max-2xl:w-full">
              Get Started <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">©2025 Sutariya Group Services Limited</div>
    </footer>
  );
};
