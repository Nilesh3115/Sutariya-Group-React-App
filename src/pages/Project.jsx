import WorkSection from "../components/Work/WorkSection";
import CollabSection from "../components/Collab/CollabSection";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import HeroBg from "/images/Project Hero.jpg"


export function Project() {
    return (
        <>

            <Breadcrums
                description="From websites and apps to digital, automation and cloud solution -we build systems that help you scale."
                bgImage={HeroBg}
            />

            <WorkSection />

            <CollabSection />

        </>
    );
}