import "./ContactUs.css"

import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";



const ContactUs = () => {
    return (
        <div id='contact' className='contact section-p1 section-mw'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <IoIosMail/><p>sutariyahelp@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <BiSolidPhoneCall/> <p>+91 989-852-3558</p>
                        </div>
                        <div className="contact-detail">
                            <FaLocationDot /> <p>Surat, Gujarat</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                {/* <form onSubmit={onSubmit} className="contact-right"> */}
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Mail' name='mail' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;