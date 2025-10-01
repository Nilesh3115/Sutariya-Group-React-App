import "./ExpertiesSection.css";

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
      // content: "Delivering innovative IT solutions, from web and app development to seamless digital integrations that empower businesses to stay ahead in the digital age.",
    },
    {
      num: "02",
      title: "Education & Training",
      img: "images/Education & Training.jpeg",
      content: "Through IT Scholars, we provide high-quality IT education and professional training programs. Our structured courses and hands-on learning experiences equip students and professionals with the latest skills, empowering them to excel in their careers and embrace future-ready opportunities confidently.",
      // content: "Providing high-quality IT education and skill-building programs that prepare students and professionals for future-ready careers.",
    },
    {
      num: "03",
      title: "Invitation & Design",
      img: "images/Invitation & Design.jpeg",
      content: "Digiinvitation offers a vast collection of creative invitation designs for every occasion. With over 1000 unique templates and custom options, we combine creativity, elegance, and personalization to ensure that every event—from weddings to corporate gatherings—is memorable and visually striking.",
      // content: "Crafting thousands of unique invitation designs for every occasion, blending creativity with personalization for memorable events.",
    },
    {
      num: "04",
      title: "Creative Printing",
      img: "images/Creative Printing.jpeg",
      content: "Uniprint specializes in end-to-end digital printing solutions. We create fully customized products, including mugs, t-shirts, kurtas, shirts, and welcome kits, blending high-quality materials with cutting-edge printing technology to bring your brand, message, or personal design to life in a visually impactful way.",
      // content: "Specializing in digital printing with fully customized products, including mugs, t-shirts, kurtas, shirts, and corporate welcome kits.",
    },
    {
      num: "05",
      title: "Marketing Strategies",
      img: "images/Marketing Strategies.jpeg",
      content: "Marketing365 drives measurable business growth through expert digital marketing solutions. From SEO, social media campaigns, and PPC advertising to content marketing and brand strategy, we craft data-driven, results-oriented approaches that increase visibility, engagement, and revenue for businesses across industries.",
      // content: "Driving measurable business growth with expert digital marketing, SEO, social media campaigns, and result-oriented promotional strategies.",
    },
  ];

  return (
    <section className="expertise-section section-p1 section-mw">
      <h2 className="fade-in-up">
        We Offer <br /> Expertise in
      </h2>

      <ul className="accordion fade-in-up">
        {items.map((item, index) => (
          <li
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""
              }`}
          >
            {/* Accordion Header */}
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <div className="item-left">
                <span className="num">{item.num}</span>
                <span>{item.title}</span>
              </div>
              <span className="arroww"><GoArrowUpRight /></span>
              <img
                src={item.img}
                alt={item.title}
                className="hover-img"
              />
            </div>

            {/* Accordion Content */}
            <div
              className="accordion-content"
              style={{
                display: activeIndex === index ? "block" : "none",
              }}
            >
              <p>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExpertiseSection;
