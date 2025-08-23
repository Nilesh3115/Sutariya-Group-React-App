import "./HeroSection.css"

const HeroSection = () => {
    return (

        // Hero Section
        <section className="hero section-mw">
            <video autoPlay muted loop playsInline className="hero-video" src="/images/3163534-uhd_3840_2160_30fps.mp4"></video>
            <div className="hero-content">
                <h1>Empowering Businesses With End-to-End Solutions</h1>
                <p>
                    Our multidisciplinary expertise spans creative design, advanced printing, and digital innovation — ensuring
                    <br />your business has everything it needs to lead in today’s market.
                </p>
                <a href="./services.php" className="btn">Get Started Today</a>
            </div>
        </section>
        // End of Hero Section


    );
};

export default HeroSection;