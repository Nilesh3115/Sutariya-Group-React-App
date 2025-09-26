import "./Footer.css"

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



import { NavLink } from "react-router-dom";

export const Footers = () => {
    return (
        <footer className="section-m1 section-mw section-p1">
            <NavLink to="/">
                <img src="/images/logo.png" alt="" />
            </NavLink>
            <div className="copyright">
                <p>&copy;2025 Sutariya Group Services Limited</p>
            </div>
            <div className="icon">
                <a href="#"><i><FaFacebookF /></i></a>
                <a href="#"><i><FaYoutube /></i></a>
                <a href="#"><i><FaTwitter /></i></a>
                <a href="#"><i><FaInstagram /></i></a>
                <a href="#"><i><FaLinkedin /></i></a>

            </div>
        </footer>
    );
};