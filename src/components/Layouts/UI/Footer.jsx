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
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    );
};