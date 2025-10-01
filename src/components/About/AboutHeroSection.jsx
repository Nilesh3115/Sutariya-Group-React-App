import "./AboutHeroSection.css"

const AboutHeroSection = () => {
    return (

        <section className="hero section-mw">
            <img src="./images/AI Banner_08.jpg" className="hero-video" alt="" />
            {/* <video autoPlay muted loop playsInline className="hero-video" src="/images/3251737-uhd_3840_2160_25fps.mp4"></video> */}
            <div className="hero-content">
                <h1 className="fade-in-up">Empowering Businesses with Complete Solutions</h1>
                <p className="fade-in-up">
                    From Digital Marketing to IT Solutions, Printing, and Professional Services –
                    <br />we bring everything your business needs under one roof.
                </p>
                <a href="" className="btn fade-in-up">Explore Services</a>
            </div>
        </section>


    );
};

export default AboutHeroSection;