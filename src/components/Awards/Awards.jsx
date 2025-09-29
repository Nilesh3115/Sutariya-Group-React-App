import "./Awards.css"
import Slider from "react-slick";

const Awards = () => {
  const settings = {
    dots: false,          // navigation dots
    infinite: true,      // infinite loop
    speed: 500,          // transition speed
    slidesToShow: 3,     // how many images visible
    slidesToScroll: 1,   // how many images to scroll
    autoplay: true,      // auto play
    autoplaySpeed: 3000, // 3 seconds
    arrows: true         // show next/prev arrows
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
            <img src="/images/Awards_1.png" alt="Slide 1" />
          </div>
          <div className="awards-img">
            <img src="/images/Awards_2.png" alt="Slide 2" />
          </div>
          <div className="awards-img">
            <img src="/images/Awards_3.png" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Awards;
