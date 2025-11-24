import Awards from "../components/Awards/Awards";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import Testimonials from "../components/Testimonials/Testimonials";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import WhyChUs from "../components/WhyChUs/WhyChUs";
import HeroBg from "/images/About Hero.jpg"


export function About() {
    return (
        <>

            <Breadcrums
                description="We are innovators, developers, and stratergists committed to building digital products that transform bussiness."
                bgImage={HeroBg}
            />


            <WhoWeAre />

            <WhyChUs />

            <Awards />

            <Testimonials />
        </>
    );
}