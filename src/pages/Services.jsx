import AboutHeroSection from "../components/About/AboutHeroSection";
import CollabSection from "../components/Collab/CollabSection";
import ServicesSection from "../components/Services/ServicesSection";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import HeroBg from "/images/Hero Background.jpg"




export function Services() {
    return (
        <>

            <Breadcrums
                description="Explore the wide range of services we offer to grow your business."
                bgImage={HeroBg}
            />

            <ServicesSection />

            <CollabSection />
        </>
    );
}