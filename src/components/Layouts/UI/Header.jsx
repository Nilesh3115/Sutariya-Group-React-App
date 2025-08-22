import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";


export const Headers = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {   // 50px se jyada scroll ho to bg white
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
                <img src="/images/logo.png" alt="" />
            </NavLink>

            <div>
                <ul className="navbar" id="navbar">
                    <li className="ac-h-e">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="ac-h-e">
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="ac-h-e">
                        <NavLink to="/project">
                            Project
                        </NavLink>
                    </li>
                    <li className="ac-h-e">
                        <NavLink to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li className="ac-h-e">
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>

    );
};