
import { GrAchievement } from "react-icons/gr";
import { TbBulb } from "react-icons/tb";
import { PiUserFocusBold } from "react-icons/pi";

const WhyChUs = () => {
  return (
    <section
      className="flex items-center justify-center gap-y-7.5 gap-x-10 flex-wrap 3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] xl:py-[80px] 
        xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] md:px-[20px] 
        sm:py-[40px] sm:px-[20px] 
        font-outfit bg-black text-white w-full "
    >
      <div className="w-[48%] max-2xl:w-[47%] max-lg:w-full">
        <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp">
          WHY CHOOSE US
        </p>
        <h2 className="3xl:text-3xlh2 3xl:leading-3xlh2 2xl:text-2xlh2 2xl:leading-2xlh2 xl:text-xlh2 xl:leading-xlh2 lg:text-lgh2 lg:leading-lgh2 md:text-mdh2 md:leading-mdh2 sm:text-smh2 sm:leading-smh2">
          Excellence You Can Trust
        </h2>
        <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp">
          At Suatriya Group, we combine innovation, expertise, and integrity to
          deliver exceptional solutions across industries. Our commitment to
          quality, sustainable growth, and ethical practices ensures strong
          partnerships, empowers communities, and creates lasting value, making
          us a trusted choice for clients and stakeholders seeking reliable,
          forward-thinking solutions.
        </p>
      </div>

      <div className="w-[48%] h-auto max-2xl:w-[47%] max-lg:w-full">
        <img
          className="max-w-full w-full h-auto transition-transform duration-400 ease-in-out hover:translate-y-[-10px]"
          src="./images/AI Banner_03.jpg"
          loading="lazy"
          alt=""
        />
      </div>

      <div className="flex items-start justify-center flex-wrap gap-7.5">
        <div
          className="flex flex-col w-[31%] max-xl:w-[30%] max-lg:w-[47%] max-2xl:w-[47%]
max-md:w-full items-start justify-center gap-5"
        >
          <div className=" text-[50px] text-primary">
            <GrAchievement />
          </div>
          <div className="flex flex-col items-start justify-center gap-2.5">
            <h3 className="3xl:text-3xlh3 3xl:leading-3xlh3 2xl:text-2xlh3 2xl:leading-2xlh3 xl:text-xlh3 xl:leading-xlh3 lg:text-lgh3 lg:leading-lgh3 md:text-mdh3 md:leading-mdh3 sm:text-smh3 sm:leading-smh3">
              Experties
            </h3>
            <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp font-light">
              With years of diversified experience, we bring deep industry
              knowledge and proven capabilities to every project. Our expertise
              ensures efficient solutions, reliable outcomes, and value-driven
              strategies tailored to client needs.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col w-[31%] max-xl:w-[30%] max-lg:w-[47%] max-2xl:w-[47%]
max-md:w-full items-start justify-center gap-5"
        >
          <div className=" text-[50px] text-primary">
            <TbBulb />
          </div>
          <div className="flex flex-col items-start justify-center gap-2.5">
            <h3 className="3xl:text-3xlh3 3xl:leading-3xlh3 2xl:text-2xlh3 2xl:leading-2xlh3 xl:text-xlh3 xl:leading-xlh3 lg:text-lgh3 lg:leading-lgh3 md:text-mdh3 md:leading-mdh3 sm:text-smh3 sm:leading-smh3">
              Innovation
            </h3>
            <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp font-light">
              We embrace new ideas, modern technologies, and forward-thinking
              strategies to deliver solutions that go beyond expectations.
              Innovation drives our growth, keeps us adaptable, and helps us
              shape a sustainable and progressive future.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col w-[31%] max-xl:w-[30%] max-lg:w-[47%] max-2xl:w-[47%]
max-md:w-full items-start justify-center gap-5"
        >
          <div className=" text-[50px] text-primary">
            <PiUserFocusBold />
          </div>
          <div className="flex flex-col items-start justify-center gap-2.5">
            <h3 className="3xl:text-3xlh3 3xl:leading-3xlh3 2xl:text-2xlh3 2xl:leading-2xlh3 xl:text-xlh3 xl:leading-xlh3 lg:text-lgh3 lg:leading-lgh3 md:text-mdh3 md:leading-mdh3 sm:text-smh3 sm:leading-smh3">
              Client Focus
            </h3>
            <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp font-light">
              Our clients are at the heart of everything we do. By understanding
              their goals and challenges, we deliver personalized solutions,
              long-term value, and trusted partnerships built on integrity,
              transparency, and shared success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChUs;
