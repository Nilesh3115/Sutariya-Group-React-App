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
      breakpoint: 1440,  // --breakpoint-3xl
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1280,  // --breakpoint-2xl
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,  // --breakpoint-xl
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,  // --breakpoint-lg
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,  // --breakpoint-md
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 390,  // --breakpoint-sm (small mobile)
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  };

  return (
    <>


      <div className="3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] xl:py-[80px] 
        xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] md:px-[20px] 
        sm:py-[40px] sm:px-[20px] 
        font-outfit bg-black text-white w-full ">
        <div className="subtitle-wrap">
          <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp">EXPLORE OUR SUCCESS</p>
          <h2 className="3xl:text-3xlh2 3xl:leading-3xlh2 2xl:text-2xlh2 2xl:leading-2xlh2 xl:text-xlh2 xl:leading-xlh2 lg:text-lgh2 lg:leading-lgh2 md:text-mdh2 md:leading-mdh2 sm:text-smh2 sm:leading-smh2">Awards & Certificate</h2>
        </div>
        <Slider {...settings} className="mt-5">
          <div className="size-full p-2.5">
            <img className="size-full rounded-[10px]" src="/images/Awards_1.png" alt="Slide 1" />
          </div>
          <div className="size-full p-2.5">
            <img className="size-full rounded-[10px]" src="/images/Awards_2.png" alt="Slide 2" />
          </div>
          <div className="size-full p-2.5">
            <img className="size-full rounded-[10px]" src="/images/Awards_3.png" alt="Slide 3" />
          </div>
          <div className="size-full p-2.5">
            <img className="size-full rounded-[10px]" src="/images/Awards_1.png" alt="Slide 4" />
          </div>
          <div className="size-full p-2.5">
            <img className="size-full rounded-[10px]" src="/images/Awards_2.png" alt="Slide 5" />
          </div>
          <div className="size-full p-2.5">
            <img className="size-full rounded-[10px]" src="/images/Awards_3.png" alt="Slide 6" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Awards;
