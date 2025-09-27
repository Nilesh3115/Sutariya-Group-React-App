import "./Testimonials.css"

import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "- Ernest Hemingway",
        // quote: "CEO, CompanyX",
        text: "Their words are a testament to our commitment to excellence, creativity, and customer-centric approach. We're honored to have been a part of their projects and look forward to the opportunity of working with you.",
        // image: "https://via.placeholder.com/80",
    },
    {
        id: 2,
        name: "- Ernest Hemingway",
        // quote: "CEO, CompanyX",
        text: "Working with Kinetiq was an absolute game-changer for our business. Their team brought creativity, professionalism, and innovation to every step of the project. Our brand has never looked better!",
        // image: "https://via.placeholder.com/80",
    },
    {
        id: 3,
        name: "- Ernest Hemingway",
        // quote: "CEO, CompanyX",
        text: "Kinetiq took our ideas and elevated them beyond what we imagined. The team’s passion and dedication were evident in every interaction, and the final deliverables were outstanding.",
        // image: "https://via.placeholder.com/80",
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (

        <section className="testimonials section-p1 section-mw">
            <h2>Worldwide Trust Built <br /> on Excellence</h2>
            <div className="testimonial-content-img">
                <div className="test-left">
                    <img src="./images/68767a21fe51d132a838140f_testimony-image-1.webp" loading="lazy" alt="" />
                </div>


                <div className="slideshow-container">
                    <div className="mySlides">
                        <q>{testimonials[current].text}</q>
                        <p className="author">{testimonials[current].name}</p>
                    </div>

                    {/* Controls */}
                    <a className="prev" onClick={prevSlide}>&#10094;</a>
                    <a className="next" onClick={nextSlide}>&#10095;</a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
