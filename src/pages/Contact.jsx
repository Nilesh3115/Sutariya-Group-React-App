import CollabSection from "../components/Collab/CollabSection";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import HeroBg from "/images/Contact Hero.jpg"
import ContactUs from "../components/Contact Us/ContactUs";

export function Contact() {
    return (
        <>

            <Breadcrums
                description="Get in touch with our team for business inquiries, support, or collaborations. We’re here to answer your questions and explore opportunities together."
                bgImage={HeroBg}
            />

            <ContactUs />

            <CollabSection />

        </>
    );
}