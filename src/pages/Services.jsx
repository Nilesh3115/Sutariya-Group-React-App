import CollabSection from "../components/Collab/CollabSection";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ExpertiesSection from "../components/Experties/ExpertiesSection";
import HeroBg from "/images/Services Hero.jpg"




export function Services() {
    return (
        <>

            <Breadcrums
                description="Explore our work across web development, application, branding and digital transformation."
                bgImage={HeroBg}
            />

            <ExpertiesSection/>

            <CollabSection />
            
        </>
    );
}