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

        // Testimonials
        <section className="bg-black text-white font-outfit
        3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] 
        xl:py-[80px] xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] 
        md:px-[20px] sm:py-[40px] sm:px-[20px] w-full max-w-[1600px]">
            <h2 className="fade-in-up mb-[60px] text-center 3xl:text-3xlh2 3xl:leading-3xlh2 
      2xl:text-2xlh2 2xl:leading-2xlh2 
      xl:text-xlh2 xl:leading-xlh2 
      lg:text-lgh2 lg:leading-lgh2 
      md:text-mdh2 md:leading-mdh2 
      sm:text-smh2 sm:leading-smh2">Worldwide Trust Built <br /> on Excellence</h2>
            {/* Testimonial Content Image */}
            <div className="fade-in-up flex items-center justify-start flex-wrap gap-y-[20px] gap-x-[50px] max-xl:gap-5 max-lg:flex-col max-lg:gap-2.5">
                {/* Test Left */}
                <div className="w-[40%] max-w-full max-xl:w-[48%] max-lg:w-full h-auto flex items-center justify-center p-5">
                    <img className="size-full max-w-full max-lg:h-100 m-h-[500px] rounded-lg" src="./images/68767a21fe51d132a838140f_testimony-image-1.webp" loading="lazy" alt="" />
                </div>

                {/* Slideshow Container */}
                <div className="w-[48%] max-w-full max-xl:w-[48%] max-lg:w-full flex flex-col gap-y-0 gap-x-[20px]">
                    {/* mySlides */}
                    <div className="flex flex-col gap-y-[50px] gap-x-[20px] relative text-start  px-[10px] pt-[10px] pb-[60px]">
                        <q className="3xl:text-3xlq 3xl:leading-3xlq 
      2xl:text-2xlq 2xl:leading-2xlq 
      xl:text-xlq xl:leading-xlq 
      lg:text-lgq lg:leading-lgq 
      md:text-mdq md:leading-mdq 
      sm:text-smq sm:leading-smq">{testimonials[current].text}</q>
                        {/* prev,next buttons */}
                        <a className="absolute right-[60px] bottom-0 w-[50px] h-[50px] flex items-center justify-center text-[20px] text-white cursor-pointer select-none border-[1px] rounded-[50%] p-[10px] hover:bg-primary hover:border-none transition-colors duration-500" onClick={prevSlide}>&#10094;</a>
                        <a className="absolute right-[0] bottom-0 w-[50px] h-[50px] flex items-center justify-center text-[20px] text-white cursor-pointer select-none border-[1px] rounded-[50%] p-[10px] hover:bg-primary hover:border-none transition-colors duration-500" onClick={nextSlide}>&#10095;</a>
                    </div>
                    <div className="autor-info">
                        {/* author */}
                        <p className="text-[18px] font-semibold text-white">{testimonials[current].name}</p>
                        <p className="text-[16px]">{testimonials[current].quote}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
