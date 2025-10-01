
import "./WorkSection.css"
import { GoArrowUpRight } from "react-icons/go";




const WorkSection = () => {
    return (

        <section className="works section-p1 section-mw">

            {/* <!-- Section Heading with Title & Introductory Paragraph --> */}
            <div className="work-para-wrap fade-in-up">

                {/* <!-- Section Title --> */}
                <div className="work-title">
                    <h2>Impact We Created</h2>
                </div>

                {/* <!-- Section Description & Call-to-Action Button --> */}
                <div className="work-para">
                    <p>
                        Through knowledge, design, and technology, we’ve empowered individuals and businesses to grow, connect, and thrive. From digital solutions to creative services, every effort we deliver leaves a lasting impact that builds trust, drives success, and inspires transformation.
                    </p>
                    <button className="btn-s fade-in-up">
                        Get Started <i><GoArrowUpRight /></i>
                    </button>
                </div>
            </div>

            {/* <!-- ================== Image Cards Section ================== --> */}
            <div className="image-cards section-mw">

                {/* <!-- ===== Card 1: UI/UX Design Project ===== --> */}
                <div className="card">
                    {/* <!-- Project Image --> */}
                    <div className="card-img">
                        {/* <img src="/images/Work-section-1.avif" loading="lazy" alt="UI/UX Design Project - Wayflyer Dashboard" /> */}
                        <img src="/images/Development & IT.jpg" loading="lazy" alt="UI/UX Design Project - Wayflyer Dashboard" />
                    </div>
                    {/* <!-- Text Content with Project Title & Category --> */}
                    <div className="txt-wrap-icon">
                        <div className="txt-wrap">
                            <h4>Web, App & Digital Solutions</h4>
                            <h3>Sutariya Infotech</h3>
                        </div>
                        {/* <!-- Arrow Icon (Clickable Link/Action) --> */}
                        <div className="arrow">
                            <i><GoArrowUpRight /></i>
                            {/* <i><GoArrowUpRight /></i> */}
                        </div>
                    </div>
                </div>

                {/* <!-- ===== Card 2: Branding & Logo Project ===== --> */}
                <div className="card">
                    <div className="card-img">
                        {/* <img src="/images/Work-section-2.avif" loading="lazy" alt="Branding & Logo Project - Dynamotion" /> */}
                        <img src="/images/Education.jpg" loading="lazy" alt="Branding & Logo Project - Dynamotion" />
                    </div>
                    <div className="txt-wrap-icon">
                        <div className="txt-wrap">
                            <h4>IT Education & Training</h4>
                            <h3>IT Scholars</h3>
                        </div>
                        <div className="arrow">
                            <i><GoArrowUpRight /></i>
                        </div>
                    </div>
                </div>

                {/* <!-- ===== Card 3: Digital Branding Project ===== --> */}
                <div className="card">
                    <div className="card-img">
                        {/* <img src="/images/Work-section-3.avif" loading="lazy" alt="Digital Branding Project - Solaria Marketing" /> */}
                        <img src="/images/Invitation.jpg" loading="lazy" alt="Digital Branding Project - Solaria Marketing" />
                    </div>
                    <div className="txt-wrap-icon">
                        <div className="txt-wrap">
                            <h4>Creative Invitation Designs</h4>
                            <h3>Digiinvitation</h3>
                        </div>
                        <div className="arrow">
                            <i><GoArrowUpRight /></i>
                        </div>
                    </div>
                </div>

                {/* <!-- ===== Card 4: Mobile App Design Project ===== --> */}
                <div className="card">
                    <div className="card-img">
                        {/* <img src="/images/Work-section-4.avif" loading="lazy" alt="Mobile App Design Project - Elevate Fitness App" /> */}
                        <img src="/images/Custom Print Solutions.jpg" loading="lazy" alt="Mobile App Design Project - Elevate Fitness App" />
                    </div>
                    <div className="txt-wrap-icon">
                        <div className="txt-wrap">
                            <h4>Customized Printing Solutions</h4>
                            <h3>Uniprint</h3>
                        </div>
                        <div className="arrow">
                            <i><GoArrowUpRight /></i>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- ================== End of Image Cards Section ================== --> */}

        </section>

    );
};
export default WorkSection;