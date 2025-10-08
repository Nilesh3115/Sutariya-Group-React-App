import "./Awards.css"
import Slider from "react-slick";

const Awards = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,  // large tablets & small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,  // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,  // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false   // hide arrows on mobile
        }
      }
    ]
  };

  return (
    <>


      <div className="awards section-p1 section-mw">
        <div className="subtitle-wrap">
          <p>EXPLORE OUR SUCCESS</p>
          <h2>Awards & Certificate</h2>
        </div>
        <Slider {...settings} className="slider">
          <div className="awards-img">
            <img src="/images/Awards_1.png" alt="Slide 1" />
          </div>
          <div className="awards-img">
            <img src="/images/Awards_2.png" alt="Slide 2" />
          </div>
          <div className="awards-img">
            <img src="/images/Awards_3.png" alt="Slide 3" />
          </div>
          <div className="awards-img">
            <img src="/images/Awards_1.png" alt="Slide 4" />
          </div>
          <div className="awards-img">
            <img src="/images/Awards_2.png" alt="Slide 5" />
          </div>
          <div className="awards-img">
            <img src="/images/Awards_3.png" alt="Slide 6" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Awards;
