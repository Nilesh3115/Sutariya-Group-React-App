import "./AboutUs.css"

const AboutUs = () => {
    return (
        <section className="ab-works section-p1 section-mw">

            <div className="ab-work-para-wrap fade-in-up">
                {/* <!-- Section Title --> */}
                <div className="ab-work-title">
                    <h2>We make your<br />bussiness stand out</h2>
                </div>
                <div className="ab-work-para">
                    <p>Sutariya Group is dedicated to helping businesses and individuals shine with innovative solutions that combine creativity and technology. From IT education and digital services to custom invitations, printing, and marketing, we craft experiences that strengthen identity, build trust, and inspire growth. With a passion for excellence, our team ensures every service is designed to add value and make your business stand out in a competitive world.</p>
                </div>
            </div>

            <div className="image-counter">
                <div className="image">
                    <img src="./images/68767a21fe51d132a838140b_round_tube.png" loading="lazy" alt="" />
                </div>

                <div className="counters">
                    <div className="count-wrap fade-in-up">
                        <h3>329+</h3>
                        <p>Project Complete</p>
                    </div>

                    <div className="count-wrap fade-in-up">
                        <h3>99%</h3>
                        <p>Satisfied Clients</p>
                    </div>

                    <div className="count-wrap fade-in-up">
                        <h3>6240+</h3>
                        <p>Hours of work</p>
                    </div>

                    <div className="count-wrap fade-in-up">
                        <h3>05+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>

            <div className="logo-images">
                <div className="images">
                    <img src="./images/IT Scholars.png" loading="lazy" alt="" />
                </div>
                <div className="images">
                    <img src="./images/Sutariya Infotech.png" loading="lazy" alt="" />
                </div>
                <div className="images">
                    <img src="./images/Digi Invitation.png" loading="lazy" alt="" />
                </div>
                <div className="images">
                    <img src="./images/Uniprint.png" loading="lazy" alt="" />
                </div>
                <div className="images">
                    <img src="./images/Marketing 365.png" loading="lazy" alt="" />
                </div>
            </div>

        </section>

    );
};


export default AboutUs;