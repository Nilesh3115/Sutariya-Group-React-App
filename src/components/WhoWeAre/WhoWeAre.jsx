import "./WhoWeAre.css"





const WhoWeAre = () => {
    return (

        <section className="flex items-center justify-center gap-x-10 gap-y-12.5 flex-wrap 3xl:px-[150px] 3xl:py-[80px] 2xl:p-[80px] xl:py-[80px] 
        xl:px-[60px] lg:py-[60px] lg:px-[40px] md:py-[40px] md:px-[20px] 
        sm:py-[40px] sm:px-[20px] 
        font-outfit bg-black text-white w-full max-w-[1600px]">


            <div className="w-[48%] max-2xl:w-[47%] max-lg:w-[46%] max-md:w-full h-auto">
                <img className="max-w-full w-full h-auto transition-transform duration-400 ease-in-out hover:translate-y-[-10px]" src="./images/68767a21fe51d132a838140b_round_tube.png" loading="lazy" alt="" />
            </div>

            <div className="w-[48%] max-2xl:w-[47%] max-lg:w-[46%] max-md:w-full  text-white flex flex-col items-start justify-start gap-y-2.5 gap-x-5">
                <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp">WHO WE ARE</p>
                <h2 className="3xl:text-3xlh2 3xl:leading-3xlh2 2xl:text-2xlh2 2xl:leading-2xlh2 xl:text-xlh2 xl:leading-xlh2 lg:text-lgh2 lg:leading-lgh2 md:text-mdh2 md:leading-mdh2 sm:text-smh2 sm:leading-smh2">Driving Innovation, Building Trust</h2>
                <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp">Suatriya Group is a diversified organization founded on the principles of innovation, integrity, and excellence. Since our inception, we have remained committed to driving sustainable growth while delivering long-term value to our stakeholders. With operations spanning multiple industries, we combine deep expertise, forward-thinking strategies, and modern technologies to create solutions that exceed expectations. Our focus is not only on building successful businesses but also on contributing to the progress of society by fostering trust, responsibility, and impactful partnerships.</p>
                <p className="3xl:text-3xlp 3xl:leading-3xlp 2xl:text-2xlp 2xl:leading-2xlp xl:text-xlp xl:leading-xlp lg:text-lgp lg:leading-lgp md:text-mdp md:leading-mdp sm:text-smp sm:leading-smp">Guided by strong ethics and a vision for the future, Suatriya Group continues to empower communities, strengthen relationships, and create opportunities that drive progress. We believe in shaping a sustainable tomorrow by aligning innovation with responsibility and growth with purpose.</p>
            </div>
        </section>

    );
};
export default WhoWeAre;