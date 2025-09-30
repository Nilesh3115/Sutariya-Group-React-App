import "./WhyChUs.css"

import { GrAchievement } from "react-icons/gr";
import { TbBulb } from "react-icons/tb";
import { PiUserFocusBold } from "react-icons/pi";



const WhyChUs = () => {
    return (
        <section className="why-ch-us section-p1 section-mw">

            <div className="heading-sub">
                <p>WHY CHOOSE US</p>
                <h2>Excellence You Can Trust</h2>
                <p>At Suatriya Group, we combine innovation, expertise, and integrity to deliver exceptional solutions across industries. Our commitment to quality, sustainable growth, and ethical practices ensures strong partnerships, empowers communities, and creates lasting value, making us a trusted choice for clients and stakeholders seeking reliable, forward-thinking solutions.</p>
            </div>

            <div className="why-img">
                <img src="./images/AI Banner_03.jpg" loading="lazy" alt="" />
            </div>

            <div className="icon-boxes">

                <div className="icon-box">
                    <div className="icon"><GrAchievement /></div>
                    <div className="box-content">
                        <h3>Experties</h3>
                        <p>With years of diversified experience, we bring deep industry knowledge and proven capabilities to every project. Our expertise ensures efficient solutions, reliable outcomes, and value-driven strategies tailored to client needs.</p>
                    </div>
                </div>

                <div className="icon-box">
                    <div className="icon"><TbBulb /></div>
                    <div className="box-content">
                        <h3>Innovation</h3>
                        <p>We embrace new ideas, modern technologies, and forward-thinking strategies to deliver solutions that go beyond expectations. Innovation drives our growth, keeps us adaptable, and helps us shape a sustainable and progressive future.</p>
                    </div>
                </div>

                <div className="icon-box">
                    <div className="icon"><PiUserFocusBold /></div>
                    <div className="box-content">
                        <h3>Client Focus</h3>
                        <p>Our clients are at the heart of everything we do. By understanding their goals and challenges, we deliver personalized solutions, long-term value, and trusted partnerships built on integrity, transparency, and shared success.</p>
                    </div>
                </div>
            </div>



        </section>

    );
};

export default WhyChUs;