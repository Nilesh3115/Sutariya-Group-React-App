import AboutHeroSection from "../components/About/AboutHeroSection";
import Awards from "../components/Awards/Awards";
import Testimonials from "../components/Testimonials/Testimonials";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import WhyChUs from "../components/WhyChUs/WhyChUs";

export function About() {
    return (
        <>
            <AboutHeroSection />

            <WhoWeAre />

            <WhyChUs />

            <Awards/>

            <Testimonials />
        </>
    );
}