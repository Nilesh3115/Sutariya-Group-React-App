import AboutUs from "../components/About Us/AboutUs";
import AboutHeroSection from "../components/About/AboutHeroSection";
import ServicesSection from "../components/Services/ServicesSection";
import Testimonials from "../components/Testimonials/Testimonials";

export function About() {
    return (
        <>
            <AboutHeroSection />

            <AboutUs />

            <ServicesSection />

            <Testimonials />
        </>
    );
}