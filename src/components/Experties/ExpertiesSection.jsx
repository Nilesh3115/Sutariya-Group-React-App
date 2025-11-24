
import { GoArrowUpRight } from "react-icons/go";

import { useState } from "react";

const ExpertiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // agar same item pe dobara click ho to close ho jaye
    } else {
      setActiveIndex(index); // warna naye wale pe active lag jaye
    }
  };

  const items = [
    {
      num: "01",
      title: "Technology Solutions",
      img: "images/Technology Solutions.jpeg",
      content: "Sutariya Group delivers innovative IT solutions tailored to modern business needs. From responsive web and mobile app development to complete digital integration, we help organizations streamline processes, enhance customer experiences, and stay competitive in a fast-evolving digital landscape.",
    },
    {
      num: "02",
      title: "Education & Training",
      img: "images/Education & Training.jpeg",
      content: "Through IT Scholars, we provide high-quality IT education and professional training programs. Our structured courses and hands-on learning experiences equip students and professionals with the latest skills, empowering them to excel in their careers and embrace future-ready opportunities confidently.",
    },
    {
      num: "03",
      title: "Invitation & Design",
      img: "images/Invitation & Design.jpeg",
      content: "Digiinvitation offers a vast collection of creative invitation designs for every occasion. With over 1000 unique templates and custom options, we combine creativity, elegance, and personalization to ensure that every event—from weddings to corporate gatherings—is memorable and visually striking.",
    },
    {
      num: "04",
      title: "Creative Printing",
      img: "images/Creative Printing.jpeg",
      content: "Uniprint specializes in end-to-end digital printing solutions. We create fully customized products, including mugs, t-shirts, kurtas, shirts, and welcome kits, blending high-quality materials with cutting-edge printing technology to bring your brand, message, or personal design to life in a visually impactful way.",
    },
    {
      num: "05",
      title: "Marketing Strategies",
      img: "images/Marketing Strategies.jpeg",
      content: "Marketing365 drives measurable business growth through expert digital marketing solutions. From SEO, social media campaigns, and PPC advertising to content marketing and brand strategy, we craft data-driven, results-oriented approaches that increase visibility, engagement, and revenue for businesses across industries.",
    },
  ];

  return (

    <section className="flex flex-col justify-center gap-[30px] relative 
    3xl:px-[150px] 3xl:py-[80px] 
    2xl:p-[80px] 
    xl:py-[80px] xl:px-[60px] 
    lg:py-[60px] lg:px-[40px] 
    md:py-[40px] md:px-[20px] 
    sm:py-[40px] sm:px-[20px] 
    font-outfit text-white bg-black border-none  w-full">

      <h2 className="fade-in-up text-center mb-[40px]
      3xl:text-3xlh2 3xl:leading-3xlh2 
      2xl:text-2xlh2 2xl:leading-2xlh2 
      xl:text-xlh2 xl:leading-xlh2 
      lg:text-lgh2 lg:leading-lgh2 
      md:text-mdh2 md:leading-mdh2 
      sm:text-smh2 sm:leading-smh2 max-lg:mb-0">
        We Offer <br /> Expertise in
      </h2>

      {/* Accordion */}
      <ul className="fade-in-up list-none p-0 m-0 relative">
        {items.map((item, index) => (
          <li
            key={index}
            className={`border-b border-white cursor-pointer relative transition-all duration-300 ${activeIndex === index ? "active" : ""
              }`}
          >
            {/* Accordion Header */}
            <div
              className="group flex justify-between items-start py-[25px] px-[15px] font-bold max-2xl:text-[38px] max-xl:text-[32px] max-lg:text-[26px] max-md:text-[24px]"
              onClick={() => toggleAccordion(index)}
            >
              {/* Left Section */}
              <div className="flex items-center gap-[72px] max-md:gap-y-[20px] max-md:gap-x-[30]">
                <span className="text-white font-normal text-[16px]">
                  {item.num}
                </span>
                <span className="3xl:text-3xlspan 3xl:leading-3xlspan 
                2xl:text-2xlspan 2xl:leading-2xlspan 
                xl:text-xlspan xl:leading-xlspan 
                lg:text-lgspan lg:leading-lgspan 
                md:text-mdspan md:leading-mdspan 
                sm:text-smspan sm:leading-smspan">
                  {item.title}
                </span>
              </div>

              {/* Arrow Icon */}
              <span className="text-[70px] transition-transform duration-300 ease-in-out group-hover:scale-105 max-xl:text-[55px] max-lg:text-[50px] max-md:text-[35px]">
                <GoArrowUpRight />
              </span>

              {/* Hover Image */}
              {/* <img
                src={item.img}
                alt={item.title}
                className="absolute top-1/2 right-[150px] -translate-y-1/2 
              w-[300px] h-auto rounded-[12px] opacity-0 
              pointer-events-none [transition:opacity_0.4s_ease,transform_0.4s_ease] 
              group-hover:opacity-100 group-hover:scale-105 max-xl:hidden"
              /> */}
            </div>

            {/* Accordion Content */}
            <div
              className={`accordion-content overflow-hidden text-[18px] leading-3xlspan opacity-80 
              transition-[max-height,padding] duration-500 ease-in-out max-xl:py-[05px] max-xl:px-[40px] max-lg:p-x[20px] max-md:p-[0]
              ${activeIndex === index ? "max-h-[200px] py-[15px] px-[100px]" : "max-h-0 px-[100px]"}`}
            >
              <p
                className="3xl:text-3xlp 3xl:leading-3xlp 
                2xl:text-2xlp 2xl:leading-2xlp 
                xl:text-xlp xl:leading-xlp 
                lg:text-lgp lg:leading-lgp 
                md:text-mdp md:leading-mdp 
                sm:text-smp sm:leading-smp"
              >
                {item.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>

  );
};

export default ExpertiseSection;
