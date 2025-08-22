import { GoArrowUpRight } from "react-icons/go";




const WorkSection = () => {
    return (

        <section className="works section-p1 section-mw">

    {/* <!-- Section Heading with Title & Introductory Paragraph --> */}
    <div className="work-para">

        {/* <!-- Section Title --> */}
        <div className="title">
            <h2>Impact We <br/> Created</h2>
        </div>

        {/* <!-- Section Description & Call-to-Action Button --> */}
        <div className="para">
            <p>
                At Kinetiq, we specialize in offering a full range of creative branding,
                strategy, design, and development services tailored to bring your ideas to life.
            </p>
            <button className="btn-s">
                Get Started <i><GoArrowUpRight /></i>
            </button>
        </div>
    </div>

    {/* <!-- ================== Image Cards Section ================== --> */}
    <div className="image-cards section-mw">

        {/* <!-- ===== Card 1: UI/UX Design Project ===== --> */}
        <div className="card">
            {/* <!-- Project Image --> */}
            <div className="card-img">
                <img src="/images/Work-section-1.avif" alt="UI/UX Design Project - Wayflyer Dashboard"/>
            </div>
            {/* <!-- Text Content with Project Title & Category --> */}
            <div className="txt-wrap-icon">
                <div className="txt-wrap">
                    <h4>UI/UX Design</h4>
                    <h3>Wayflyer Dashboard</h3>
                </div>
                {/* <!-- Arrow Icon (Clickable Link/Action) --> */}
                <div className="arrow">
                     <i><GoArrowUpRight /></i>
                    {/* <i><GoArrowUpRight /></i> */}
                </div>
            </div>
        </div>

        {/* <!-- ===== Card 2: Branding & Logo Project ===== --> */}
        <div className="card">
            <div className="card-img">
                <img src="/images/Work-section-2.avif" alt="Branding & Logo Project - Dynamotion"/>
            </div>
            <div className="txt-wrap-icon">
                <div className="txt-wrap">
                    <h4>Branding & Logo</h4>
                    <h3>Dynamotion</h3>
                </div>
                <div className="arrow">
                    <i><GoArrowUpRight /></i>
                </div>
            </div>
        </div>

        {/* <!-- ===== Card 3: Digital Branding Project ===== --> */}
        <div className="card">
            <div className="card-img">
                <img src="/images/Work-section-3.avif" alt="Digital Branding Project - Solaria Marketing"/>
            </div>
            <div className="txt-wrap-icon">
                <div className="txt-wrap">
                    <h4>Digital Branding</h4>
                    <h3>Solaria Marketing</h3>
                </div>
                <div className="arrow">
                    <i><GoArrowUpRight /></i>
                </div>
            </div>
        </div>

        {/* <!-- ===== Card 4: Mobile App Design Project ===== --> */}
        <div className="card">
            <div className="card-img">
                <img src="/images/Work-section-4.avif" alt="Mobile App Design Project - Elevate Fitness App"/>
            </div>
            <div className="txt-wrap-icon">
                <div className="txt-wrap">
                    <h4>Mobile App Design</h4>
                    <h3>Elevate Fitness App</h3>
                </div>
                <div className="arrow">
                    <i><GoArrowUpRight /></i>
                </div>
            </div>
        </div>

    </div>
    {/* <!-- ================== End of Image Cards Section ================== --> */}

</section>

    );
};
export default WorkSection;