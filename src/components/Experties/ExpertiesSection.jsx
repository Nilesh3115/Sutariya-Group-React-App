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
      title: "Brand Design",
      img: "images/home-services-image-01.webp",
      content:
        "User Research, Information Architecture, Wireframing, Prototypes, UI Design, Usability Testing, Accessibility, Web Design, Mobile App, SaaS Product.",
    },
    {
      num: "02",
      title: "UI/UX Design",
      img: "images/home-services-image-02.webp",
      content:
        "User Research, Information Architecture, Wireframing, Prototypes, UI Design, Usability Testing, Accessibility, Web Design, Mobile App, SaaS Product.",
    },
    {
      num: "03",
      title: "Webflow Development",
      img: "images/home-services-image-03.webp",
      content:
        "User Research, Information Architecture, Wireframing, Prototypes, UI Design, Usability Testing, Accessibility, Web Design, Mobile App, SaaS Product.",
    },
    {
      num: "04",
      title: "Strategy",
      img: "images/home-services-image-04.webp",
      content:
        "User Research, Information Architecture, Wireframing, Prototypes, UI Design, Usability Testing, Accessibility, Web Design, Mobile App, SaaS Product.",
    },
  ];

  return (
    <section className="expertise-section section-p1 section-mw">
      <h2>
        We Offer <br /> Expertise in
      </h2>

      <ul className="accordion">
        {items.map((item, index) => (
          <li
            key={index}
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
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
              <span className="arroww">↗</span>
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
