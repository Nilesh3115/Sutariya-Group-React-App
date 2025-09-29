import "./WhyChUs.css"

import { GrAchievement } from "react-icons/gr";
import { TbBulb } from "react-icons/tb";
import { PiUserFocusBold } from "react-icons/pi";



const WhyChUs = () => {
    return (
        <section className="why-ch-us section-p1 section-mw">

            <div className="heading-sub">
                <p>WHY CHOOSE US</p>
                <h2>Reasons to Choose Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt repudiandae consequuntur iusto culpa optio excepturi ullam dicta facilis? Sapiente, nihil? Magni rem repellat, illum necessitatibus dolorem cupiditate libero. Possimus ipsum, voluptatibus repellendus non sapiente tempora earum unde? Doloremque nihil velit laborum eum pariatur nam nostrum ipsum aliquid illo ratione!</p>
            </div>

            <div className="why-img">
                <img src="./images/AI Banner_03.jpg" loading="lazy" alt="" />
            </div>

            <div className="icon-boxes">

                <div className="icon-box">
                    <div className="icon"><GrAchievement /></div>
                    <div className="box-content">
                        <h3>Experties</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid, corporis sed praesentium aliquam ducimus veritatis ullam explicabo? Exercitationem quisquam cum harum distinctio minima voluptatum illum dolores alias rem cumque.</p>
                    </div>
                </div>

                <div className="icon-box">
                    <div className="icon"><TbBulb /></div>
                    <div className="box-content">
                        <h3>Innovation</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid, corporis sed praesentium aliquam ducimus veritatis ullam explicabo? Exercitationem quisquam cum harum distinctio minima voluptatum illum dolores alias rem cumque.</p>
                    </div>
                </div>

                <div className="icon-box">
                    <div className="icon"><PiUserFocusBold /></div>
                    <div className="box-content">
                        <h3>Client Focus</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid, corporis sed praesentium aliquam ducimus veritatis ullam explicabo? Exercitationem quisquam cum harum distinctio minima voluptatum illum dolores alias rem cumque.</p>
                    </div>
                </div>
            </div>



        </section>

    );
};

export default WhyChUs;