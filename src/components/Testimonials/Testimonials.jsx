import "./Testimonials.css"

import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "— Rahul Mehta",
        quote: "CEO, Mehta Industries",
        text: "Sutariya Group provided innovative solutions and expert guidance, exceeding expectations. Their professionalism and commitment to client success are truly remarkable."
    },
    {
        id: 2,
        name: "— Priya Sharma",
        quote: "CEO, Sharma Enterprises",
        text: "Working with Sutariya Group was seamless. Their team is skilled, responsive, and dedicated to delivering results that drive business growth and long-term value."
    },
    {
        id: 3,
        name: "— Amit Desai",
        quote: "CEO, Desai Logistics",
        text: "The expertise and client-focused approach of Sutariya Group helped us achieve our goals efficiently. They are a reliable partner for sustainable success."
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
            <h2 className="fade-in-up">Worldwide Trust Built <br /> on Excellence</h2>
            <div className="testimonial-content-img fade-in-up">
                <div className="test-left">
                    <img src="./images/68767a21fe51d132a838140f_testimony-image-1.webp" loading="lazy" alt="" />
                </div>


                <div className="slideshow-container">
                    <div className="mySlides">
                        <q>{testimonials[current].text}</q>
                        {/* Controls */}
                        <a className="prev" onClick={prevSlide}>&#10094;</a>
                        <a className="next" onClick={nextSlide}>&#10095;</a>
                    </div>
                    <div className="autor-info">
                        <p className="author">{testimonials[current].name}</p>
                        <p className="author-post">{testimonials[current].quote}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
