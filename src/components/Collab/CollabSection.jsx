import "./CollabSection.css"

import { NavLink } from "react-router-dom";

import { GoArrowUpRight } from "react-icons/go";


const CollabSection = () => {
    return (
        // Collab Section
        <NavLink to="#">
            <div className="collab-section section-p1 section-mw">
                <h2>Lets Collaborate <br /> with us</h2>
                <div className="arrow-i">
                    <i><GoArrowUpRight /></i>
                </div>
            </div >
        </NavLink>
        // End of Collab Section
    );
};



export default CollabSection;