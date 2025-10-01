import AboutHeroSection from "../components/About/AboutHeroSection";
import Awards from "../components/Awards/Awards";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import Testimonials from "../components/Testimonials/Testimonials";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import WhyChUs from "../components/WhyChUs/WhyChUs";
import HeroBg from "/images/Hero Background.jpg"


export function About() {
    return (
        <>

            <Breadcrums
                description="Learn about our company, our mission, and how we can help you."
                bgImage={HeroBg}
            />

            {/* <AboutHeroSection /> */}

            <WhoWeAre />

            <WhyChUs />

            <Awards />

            <Testimonials />
        </>
    );
}