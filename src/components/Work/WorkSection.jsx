
import { GoArrowUpRight } from "react-icons/go";




const WorkSection = () => {
    return (

        <section className="flex flex-col justify-center 3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] xl:py-[80px] 
        xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] md:px-[20px] 
        sm:py-[40px] sm:px-[20px] 
        font-outfit bg-black text-white w-full ">

            <div className="flex items-start justify-between flex-wrap w-full max-w-full gap-y-[40px] gap-x-[10px] mb-[40px] max-xl:gap-[10px] max-md:gap-y-[25px] max-md:gap-x-[0] max-xl:flex-col ">

                <div className="fade-in-up w-[49%] flex items-center justify-start pr-[205px] max-xl:pr-[0] max-xl:w-full">
                    <h2 className="3xl:text-3xlh2 3xl:leading-3xlh2 2xl:text-2xlh2 2xl:leading-2xlh2 xl:text-xlh2 xl:leading-xlh2 lg:text-lgh2 lg:leading-lgh2 md:text-mdh2 md:leading-mdh2 sm:text-smh2 sm:leading-smh2">Impact We Created</h2>
                </div>

                <div className="fade-in-up w-[49%] flex flex-col items-start justify-center gap-y-[30px] gap-x-0 max-xl:w-full">
                    <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp">
                        Through knowledge, design, and technology, we’ve empowered individuals and businesses to grow, connect, and thrive. From digital solutions to creative services, every effort we deliver leaves a lasting impact that builds trust, drives success, and inspires transformation.
                    </p>
                    <button className="fade-in-up flex items-center justify-center gap-4 text-[16px] bg-none border-white border-[1px] px-[32px] py-[08px] rounded-[99px] text-white hover:bg-[#065b69] transition-colors duration-500">
                        Get Started <i><GoArrowUpRight /></i>
                    </button>
                </div>
            </div>

            <div className="fade-in-up max-w-full flex items-start justify-between flex-wrap gap-y-[60px] gap-x-[50px]">

                <div className="group flex flex-col gap-[20px] items-center justify-center w-[47%] max-3xl:w-[46%] max-lg:w-[100%]">
                    <div className="w-full h-[432px] overflow-hidden rounded-[10px] max-md:h-[350px]">
                        <img className="size-full transition duration-[900ms] group-hover:scale-110 " src="/images/Development & IT.jpg"  alt="UI/UX Design Project - Wayflyer Dashboard" />
                    </div>
                    <div className="flex items-center justify-between max-w-full w-full">
                        <div className="flex flex-col gap-[10px]">
                            <h4 className="3xl:text-3xlh4 3xl:leading-3xlh4 2xl:text-2xlh4 2xl:leading-2xlh4 xl:text-xlh4 xl:leading-xlh4 lg:text-lgh4 lg:leading-lgh4 md:text-mdh4 md:leading-mdh4 sm:text-smh4 sm:leading-smh4 transition-colors duration-[900ms] group-hover:text-primary">Web, App & Digital Solutions</h4>
                            <h3 className="3xl:text-3xlh3 3xl:leading-3xlh3 2xl:text-2xlh3 2xl:leading-2xlh3 xl:text-xlh3 xl:leading-xlh3 lg:text-lgh3 lg:leading-lgh3 md:text-mdh3 md:leading-mdh3 sm:text-smh3 sm:leading-smh3 transition-colors duration-[900ms] group-hover:text-primary"><a href="sutariyainfotech.com">Sutariya Infotech</a></h3>
                        </div>
                        <div className="flex w-[70px] h-[70px] items-center justify-center rounded-[50%] flex-none transition-colors duration-[900ms] group-hover:bg-[#065b69]">
                            <i className="text-[80px] size-full flex items-center justify-center transition-transform duration-[900ms] group-hover:scale-50"><GoArrowUpRight /></i>
                        </div>
                    </div>
                </div>

                <div className="group flex flex-col gap-[20px] items-center justify-center w-[47%] max-3xl:w-[46%] max-lg:w-[100%]">
                    <div className="w-full h-[432px] overflow-hidden rounded-[10px] max-md:h-[350px]">
                        <img className="size-full transition duration-[900ms] group-hover:scale-110 " src="/images/Education.jpg"  alt="Branding & Logo Project - Dynamotion" />
                    </div>
                    <div className="flex items-center justify-between max-w-full w-full">
                        <div className="flex flex-col gap-[10px]">
                            <h4 className="3xl:text-3xlh4 3xl:leading-3xlh4 2xl:text-2xlh4 2xl:leading-2xlh4 xl:text-xlh4 xl:leading-xlh4 lg:text-lgh4 lg:leading-lgh4 md:text-mdh4 md:leading-mdh4 sm:text-smh4 sm:leading-smh4 transition-colors duration-[900ms] group-hover:text-primary">IT Education & Training</h4>
                            <h3 className="3xl:text-3xlh3 3xl:leading-3xlh3 2xl:text-2xlh3 2xl:leading-2xlh3 xl:text-xlh3 xl:leading-xlh3 lg:text-lgh3 lg:leading-lgh3 md:text-mdh3 md:leading-mdh3 sm:text-smh3 sm:leading-smh3 transition-colors duration-[900ms] group-hover:text-primary"><a href="itscholars.in">IT Scholars</a></h3>
                        </div>
                        <div className="flex w-[70px] h-[70px] items-center justify-center rounded-[50%] flex-none transition-colors duration-[900ms] group-hover:bg-[#065b69]">
                            <i className="text-[80px] size-full flex items-center justify-center transition-transform duration-[900ms] group-hover:scale-50"><GoArrowUpRight /></i>
                        </div>
                    </div>
                </div>

                <div className="group flex flex-col gap-[20px] items-center justify-center w-[47%] max-3xl:w-[46%] max-lg:w-[100%]">
                    <div className="w-full h-[432px] overflow-hidden rounded-[10px] max-md:h-[350px]">
                        <img className="size-full transition duration-[900ms] group-hover:scale-110 " src="/images/Invitation.jpg"  alt="Digital Branding Project - Solaria Marketing" />
                    </div>
                    <div className="flex items-center justify-between max-w-full w-full">
                        <div className="flex flex-col gap-[10px]">
                            <h4 className="3xl:text-3xlh4 3xl:leading-3xlh4 2xl:text-2xlh4 2xl:leading-2xlh4 xl:text-xlh4 xl:leading-xlh4 lg:text-lgh4 lg:leading-lgh4 md:text-mdh4 md:leading-mdh4 sm:text-smh4 sm:leading-smh4 transition-colors duration-[900ms] group-hover:text-primary">Creative Invitation Designs</h4>
                            <h3 className="3xl:text-3xlh3 3xl:leading-3xlh3 2xl:text-2xlh3 2xl:leading-2xlh3 xl:text-xlh3 xl:leading-xlh3 lg:text-lgh3 lg:leading-lgh3 md:text-mdh3 md:leading-mdh3 sm:text-smh3 sm:leading-smh3 transition-colors duration-[900ms] group-hover:text-primary"><a href="digiinvitation.com">Digiinvitation</a></h3>
                        </div>
                        <div className="flex w-[70px] h-[70px] items-center justify-center rounded-[50%] flex-none transition-colors duration-[900ms] group-hover:bg-[#065b69]">
                            <i className="text-[80px] size-full flex items-center justify-center transition-transform duration-[900ms] group-hover:scale-50"><GoArrowUpRight /></i>
                        </div>
                    </div>
                </div>

                <div className="group flex flex-col gap-[20px] items-center justify-center w-[47%] max-3xl:w-[46%] max-lg:w-[100%]">
                    <div className="w-full h-[432px] overflow-hidden rounded-[10px] max-md:h-[350px]">
                        <img className="size-full transition duration-[900ms] group-hover:scale-110 " src="/images/Custom Print Solutions.jpg"  alt="Mobile App Design Project - Elevate Fitness App" />
                    </div>
                    <div className="flex items-center justify-between max-w-full w-full">
                        <div className="flex flex-col gap-[10px]">
                            <h4 className="3xl:text-3xlh4 3xl:leading-3xlh4 2xl:text-2xlh4 2xl:leading-2xlh4 xl:text-xlh4 xl:leading-xlh4 lg:text-lgh4 lg:leading-lgh4 md:text-mdh4 md:leading-mdh4 sm:text-smh4 sm:leading-smh4 transition-colors duration-[900ms] group-hover:text-primary">Customized Printing Solutions</h4>
                            <h3 className="3xl:text-3xlh3 3xl:leading-3xlh3 2xl:text-2xlh3 2xl:leading-2xlh3 xl:text-xlh3 xl:leading-xlh3 lg:text-lgh3 lg:leading-lgh3 md:text-mdh3 md:leading-mdh3 sm:text-smh3 sm:leading-smh3 transition-colors duration-[900ms] group-hover:text-primary"><a href="uniprint.in">Uniprint</a></h3>
                        </div>
                        <div className="flex w-[70px] h-[70px] items-center justify-center rounded-[50%] flex-none transition-colors duration-[900ms] group-hover:bg-[#065b69]">
                            <i className="text-[80px] size-full flex items-center justify-center transition-transform duration-[900ms] group-hover:scale-50"><GoArrowUpRight /></i>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};
export default WorkSection;