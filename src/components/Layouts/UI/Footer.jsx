import "./Footer.css"
import { FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const Footers = () => {
    return (
        <footer className="footer section-m1 section-mw section-p1">
            {/* Top Footer */}
            <div className="footer-top">
                {/* Logo + Description */}
                <div className="footer-col-f">
                    <a href="/" className="footer-logo">
                        <img src="/images/logo.png" alt="Your Brand Logo" />
                    </a>
                    <p>
                        We helps startup companies grow, with exceptional user experiences
                        to stand out in the market.
                    </p>
                </div>

                {/* Links Column 1 */}
                <div className="footer-col-s">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/services">Services</a></li>
                    </ul>
                </div>

                {/* Links Column 2 */}
                <div className="footer-col-s">
                    <h4>Our Ventures</h4>
                    <ul>
                        <li><a href="https://sutariyainfotech.com/">Sutariya Infotech</a></li>
                        <li><a href="https://itscholars.in/">IT Scholars</a></li>
                        <li><a href="https://uniprint.in/">Uniprint</a></li>
                        <li><a href="https://digiinvitation.com/">Digi Invitation</a></li>
                    </ul>
                </div>

                {/* Social + Subscribe */}
                <div className="footer-col-soc">
                    <h4>Stay in Touch</h4>
                    <div className="socials">
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaDribbble /></a>
                        <a href="#"><FaBehance /></a>
                    </div>
                    <div className="subscribe">
                        <input type="email" placeholder="Enter Your Mail" />
                        <button className="butt">
                            Get Started <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                ©2025 Sutariya Group Services Limited</div>
        </footer>
    );
};











// import { FaFacebookF } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";



// import { NavLink } from "react-router-dom";

// export const Footers = () => {
//     return (
//         <footer className="section-m1 section-mw section-p1">
//             <NavLink to="/">
//                 <img src="/images/logo.png" loading="lazy" alt="" />
//             </NavLink>
//             <div className="copyright">
//                 <p>&copy;2025 Sutariya Group Services Limited</p>
//             </div>
//             <div className="icon">
//                 <a href="#"><i><FaFacebookF /></i></a>
//                 <a href="#"><i><FaYoutube /></i></a>
//                 <a href="#"><i><FaTwitter /></i></a>
//                 <a href="#"><i><FaInstagram /></i></a>
//                 <a href="#"><i><FaLinkedin /></i></a>

//             </div>
//         </footer>

//     );
// };