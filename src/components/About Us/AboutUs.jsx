import "./AboutUs.css"

const AboutUs = () => {
    return (
        <section className="ab-works section-p1 section-mw">

            <div className="ab-work-para-wrap">
                {/* <!-- Section Title --> */}
                <div className="ab-work-title">
                    <h2>We make your<br />bussiness stand out</h2>
                </div>
                <div className="ab-work-para">
                    <p>At Kinetiq, we are the architects of distinctive and memorable creative experiences. That align with but surpass the continually evolving standards of the creative landscape.</p>
                </div>
            </div>

            <div className="image-counter">
                <div className="image">
                    <img src="./images/68767a21fe51d132a838140b_round_tube.png" alt="" />
                </div>

                <div className="counters">
                    <div className="count-wrap">
                        <h3>329+</h3>
                        <p>Project Complete</p>
                    </div>

                    <div className="count-wrap">
                        <h3>99%</h3>
                        <p>Satisfied Clients</p>
                    </div>

                    <div className="count-wrap">
                        <h3>6240+</h3>
                        <p>Hours of work</p>
                    </div>

                    <div className="count-wrap">
                        <h3>05+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>

            <div className="logo-images">
                <div className="images">
                <img src="./images/logo1.svg" alt="" />
                </div>
                <div className="images">
                <img src="./images/logo2.svg" alt="" />
                </div>
                <div className="images">
                <img src="./images/logo3.svg" alt="" />
                </div>
                <div className="images">
                <img src="./images/logo4.svg" alt="" />
                </div>
                <div className="images">
                <img src="./images/logo5.svg" alt="" />
                </div>
            </div>

        </section>

    );
};


export default AboutUs;