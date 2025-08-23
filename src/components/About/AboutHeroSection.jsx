import "./AboutHeroSection.css"

const AboutHeroSection = () => {
    return (
        <>

        {/* // Hero Section */}
            <section className="hero section-mw">
                <video autoPlay muted loop playsInline className="hero-video" src="/images/3251737-uhd_3840_2160_25fps.mp4"></video>
                <div className="hero-content">
                    <h1>Empowering Businesses with Complete Solutions</h1>
                    <p>
                        From Digital Marketing to IT Solutions, Printing, and Professional Services –
                        <br />we bring everything your business needs under one roof.
                    </p>
                    <a href="" className="btn">Explore Services</a>
                </div>
            </section>
            {/* // End of Hero Section */}



            <section className="works section-p1 section-mw">

                <div className="work-para">
                    {/* <!-- Section Title --> */}
                    <div className="title">
                        <h2>We make your<br />bussiness stand out</h2>
                    </div>
                    <div className="para">
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
                            <p>Project Completed</p>
                        </div>

                        <div className="count-wrap">
                            <h3>329+</h3>
                            <p>Project Completed</p>
                        </div>

                        <div className="count-wrap">
                            <h3>329+</h3>
                            <p>Project Completed</p>
                        </div>

                        <div className="count-wrap">
                            <h3>329+</h3>
                            <p>Project Completed</p>
                        </div>
                    </div>
                </div>

            </section>

        </>

    );
};

export default AboutHeroSection;