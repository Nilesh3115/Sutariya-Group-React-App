import "./AboutUs.css"

const AboutUs = () => {
    return (
        <section className="ab-works section-p1 section-mw 3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] xl:py-[80px] xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] md:px-[20px] sm:py-[40px] sm:px-[20px] font-outfit bg-black text-white flex flex-col gap-[30px] justify-center items-center">

            <div className="ab-work-para-wrap fade-in-up flex w-full items-start justify-center flex-wrap gap-x-[100px] gap-y-[25px] max-w-full mb-[40px]">
                {/* <!-- Section Title --> */}
                <div className="ab-work-title flex items-center w-[46%]">
                    <h2>We make your<br />bussiness stand out</h2>
                </div>
                <div className="ab-work-para w-[46%] flex items-start justify-center flex-col">
                    <p>Sutariya Group is dedicated to helping businesses and individuals shine with innovative solutions that combine creativity and technology. From IT education and digital services to custom invitations, printing, and marketing, we craft experiences that strengthen identity, build trust, and inspire growth. With a passion for excellence, our team ensures every service is designed to add value and make your business stand out in a competitive world.</p>
                </div>
            </div>

            <div className="image-counter flex items-center justify-center max-w-full  gap-x-[100px] gap-y-[25px]">
                <div className="image w-[50%] h-auto">
                    <img className="m-w-full w-full h-auto" src="./images/68767a21fe51d132a838140b_round_tube.png" loading="lazy" alt="" />
                </div>

                <div className="counters w-[50%] flex items-center justify-center flex-wrap gap-[80px]">
                    <div className="count-wrap fade-in-up w-[43%] items-center flex flex-col justify-center">
                        <h3>329+</h3>
                        <p>Project Complete</p>
                    </div>

                    <div className="count-wrap fade-in-up w-[43%] items-center flex flex-col justify-center">
                        <h3>99%</h3>
                        <p>Satisfied Clients</p>
                    </div>

                    <div className="count-wrap fade-in-up w-[43%] items-center flex flex-col justify-center">
                        <h3>6240+</h3>
                        <p>Hours of work</p>
                    </div>

                    <div className="count-wrap fade-in-up w-[43%] items-center flex flex-col justify-center">
                        <h3>05+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>

            <div className="logo-images flex items-center justify-center gap-x-[32px] gap-y-[16px] py-[8px] flex-wrap">
                <div className="images w-[17%]">
                    <a href="https://itscholars.in/"><img className="size-full" src="./images/IT Scholars.png" loading="lazy" alt="" /></a>
                </div>
                <div className="images w-[17%]">
                    <a href="https://sutariyainfotech.com/"><img className="size-full" src="./images/Sutariya Infotech.png" loading="lazy" alt="" /></a>
                </div>
                <div className="images w-[17%]">
                    <a href="https://digiinvitation.com/"><img className="size-full" src="./images/Digi Invitation.png" loading="lazy" alt="" /></a>
                </div>
                <div className="images w-[17%]">
                    <a href="https://uniprint.in/"><img className="size-full" src="./images/Uniprint.png" loading="lazy" alt="" /></a>
                </div>
                <div className="images w-[17%]">
                    <a href="#"><img className="size-full" src="./images/Marketing 365.png" loading="lazy" alt="" /></a>
                </div>
            </div>

        </section>

    );
};


export default AboutUs;