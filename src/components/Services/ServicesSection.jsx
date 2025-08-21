const ServicesSection = () => {
    return (

        <section className="services section-mw section-p1">
            {/* <!-- Section Heading --> */}
            <h3>INDUSTRY</h3>
            <h2>Transform your business with advanced technologies</h2>
            {/* <!-- ========== Services Cards Wrapper ========== --> */}
            <div className="services-grids">
                {/* <!-- Service Item 1 --> */}
                <div className="service-grid s-1">
                    <h4>Development & IT</h4>
                </div>
                {/* <!-- Service Item 2 --> */}
                <div className="service-grid s-2">
                    <h4>Education</h4>
                </div>
                {/* <!-- Service Item 3 --> */}
                <div className="service-grid s-3">
                    <h4>Import & Export</h4>
                </div>
                {/* <!-- Service Item 4 --> */}
                <div className="service-grid s-4">
                    <h4>Design & Creative</h4>
                </div>
                {/* <!-- Service Item 5 --> */}
                <div className="service-grid s-5">
                    <h4>Sales & Marketing</h4>
                </div>
                {/* <!-- Service Item 6 --> */}
                <div className="service-grid s-6">
                    <h4>Custom Print Solutions</h4>
                </div>
            </div>
            {/* <!-- ========== /Services Cards Wrapper ========== --> */}
        </section>

    );
};


export default ServicesSection;