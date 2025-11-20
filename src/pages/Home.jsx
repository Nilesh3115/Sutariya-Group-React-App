
import AboutUs from "../components/About Us/AboutUs";
import CollabSection from "../components/Collab/CollabSection";
import ExpertiseSection from "../components/Experties/ExpertiesSection";
import HeroSection from "../components/Hero/HeroSection";
import Testimonials from "../components/Testimonials/Testimonials";
import WorkSection from "../components/Work/WorkSection";

export function Home() {
    return (
        <>
            <HeroSection />

            <AboutUs />

            <WorkSection />

            <ExpertiseSection />

            <Testimonials />

            <CollabSection />
        </>
    );
}