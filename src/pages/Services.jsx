import CollabSection from "../components/Collab/CollabSection";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ExpertiesSection from "../components/Experties/ExpertiesSection";
import HeroBg from "/images/Services Hero.jpg"




export function Services() {
    return (
        <>

            <Breadcrums
                description="Explore the wide range of services we offer to grow your business."
                bgImage={HeroBg}
            />

            <ExpertiesSection/>

            <CollabSection />
            
        </>
    );
}