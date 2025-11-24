
import { NavLink } from "react-router-dom";

import { GoArrowUpRight } from "react-icons/go";


const CollabSection = () => {
    return (
        // Collab Section
        <NavLink to="#">
            {/* Collab Section */}
            <div className="group bg-black text-white font-outfit flex items-center justify-between
        3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] 
        xl:py-[80px] xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] 
        md:px-[20px] sm:py-[40px] sm:px-[20px] w-full ">
                <h2 className="text-[76px] max-xl:text-[60px] max-lg:text-[45px] max-md:text-[32px] max-md:mb-5">Lets Collaborate <br /> with us</h2>
                {/* arrow-i */}
                <div className="rounded-[50%] flex flex-none justify-center items-center size-32.5 group-hover:bg-primary transition-colors duration-900 max-md:size-auto">
                    <i className="text-[130px] flex justify-center items-center size-full transition-transform duration-900 group-hover:scale-50 max-md:text-[60px]"><GoArrowUpRight /></i>
                </div>
            </div >
        </NavLink>
        // End of Collab Section
    );
};



export default CollabSection;