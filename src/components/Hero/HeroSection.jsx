
const HeroSection = () => {
  return (
    <section className="overflow-hidden relative h-screen w-full  bg-black/40">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="min-h-full w-full max-w-full object-cover absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        src="/images/3163534-uhd_3840_2160_30fps.mp4"
      ></video>

      <div className="flex flex-col justify-start items-start text-start 
                      md:justify-center md:items-center md:text-center
                      relative z-10 text-white px-[20px] top-1/2 -translate-y-1/2 gap-4">
        <h1 className="fade-in-up font-outfit font-bold text-h1 leading-h1 sm:text-smh1 sm:leading-smh1 md:text-mdh1 md:leading-mdh1 lg:text-lgh1 lg:leading-lgh1 xl:text-xlh1 xl:leading-xlh1 2xl:text-2xlh1">
          Empowering Businesses With End-to-End Solutions
        </h1>
        <p className="fade-in-up leading-p text-p sm:text-p sm:leading-p font-outfit">
          Our multidisciplinary expertise spans creative design, advanced printing, and digital innovation —
          ensuring<br />your business has everything it needs to lead in today’s market.
        </p>
        <a
          href="#"
          className="inline-block my-5 py-[12px] px-[24px] rounded-[6px] font-bold text-white bg-primary 
                     transition-colors duration-300 hover:bg-[#066a61] font-outfit"
        >
          Get Started Today
        </a>
      </div>
    </section>
  )
}

export default HeroSection
