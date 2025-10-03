import AboutHeroSection from "../components/About/AboutHeroSection";
import WorkSection from "../components/Work/WorkSection";
import CollabSection from "../components/Collab/CollabSection";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import HeroBg from "/images/Project Hero.jpg"


export function Project() {
    return (
        <>

            <Breadcrums
                description="Discover the impactful projects we have delivered across industries. Each project reflects our dedication to quality, innovation, and client success."
                bgImage={HeroBg}
            />

            <WorkSection />

            <CollabSection />

        </>
    );
}