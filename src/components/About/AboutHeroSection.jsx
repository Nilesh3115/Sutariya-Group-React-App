import "./AboutHeroSection.css"

const AboutHeroSection = () => {
    return (

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


    );
};

export default AboutHeroSection;