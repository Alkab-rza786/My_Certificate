import React, { useEffect, useState } from 'react'
import './Home.css'
import home_img from '../../assests/home-final.jpg'
import middle_img from '../../assests/td.png'
import what_app_logo from '../../assests/whatsApp.png'
import child_img from '../../assests/child_img.png'
import boxes from '../../assests/testimonial'
import about_img from '../../assests/about_img.jpg'
import img1 from '../../assests/img1.jpg'
import img2 from '../../assests/img2.jpg'
import img3 from '../../assests/img3.png'


// work-section 
import { LuUpload } from "react-icons/lu";
import { BiCustomize } from "react-icons/bi";

//contact section
import msg_icon from '../../assests/msg_icon.png'
import white_arrow from '../../assests/white_arrow.png'


//footer

import linkedin from '../../assests/linkedin_icon.png'
import facebook from '../../assests/facebook_icon.png'
import twitter from '../../assests/twitter_icon.png'
import insta from '../../assests/instagram.png'

export default function Home() {



    //contact us
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1a9de938-107c-4230-bac3-61bc9d06d5e1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };





    const [currentBox, setCurrentBox] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentBox(prev => (prev + 1) % 3);
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };






    return (
        <>
            <div className='home' id='home' >
                <div className="home-left">
                    <h1>Generate Certificate For <span>Your Organisation</span></h1>
                    <p className='big-view'>Certify with ease! Our platform revolutionizes the way organizations issue certificates, making it fast, secure, and affordable. With instant issuance, no volume limits, and 24/7 support, you can streamline your certification process and empower your students and employees to reach their full potential. </p>
                    <div className="home-left-btn">
                        <a href="https://wa.me/7653833191?text=I'm%20interested%20in%20buying%20the%20Credential%20System.%20May%20I%20get%20more%20information%20"> <button>Get Started</button></a>

                    </div>
                </div>
                <div className="main-right">
                    <div className="middle-img">
                        <img src={middle_img} alt="" className='man-img' />
                        <img src={child_img} alt="" className='child-img' />
                    </div>

                    {/* ADDING HERE */}
                    <div className="try">
                        <a href="https://wa.me/7653833191?text=I'm%20interested%20in%20buying%20the%20Credential%20System.%20May%20I%20get%20more%20information%20"><button>Get Started</button></a>

                    </div>
                    <div className="para"><p>Certify with ease! Our platform revolutionizes the way organizations issue certificates, making it fast, secure, and affordable. With instant issuance, no volume limits, and 24/7 support. </p></div>
                    <div className="home-right">
                        <div className="img">
                            <img src={home_img} alt="" />
                        </div>
                        <h2>Certification</h2>
                        <p>Customize certificates with our templates or your design. Elevate credentials, amplify your brand.Easy to personalize and professional. Make every achievement stand out</p>
                        <div className="home-right-btn">
                            <a href="https://wa.me/7653833191?text=I'm%20interested%20in%20buying%20the%20Credential%20System.%20May%20I%20get%20more%20information%20"> <button>Enroll now</button></a>

                        </div>
                    </div>
                    <a href="https://wa.me/7653833191?text=I'm%20interested%20in%20buying%20the%20Credential%20System.%20May%20I%20get%20more%20information%20"><div className="what-app-logo">
                        <img src={what_app_logo} alt="" />
                    </div></a>
                </div>
            </div>


            {/* Service Section  */}

            <div className="service" id='service' >
                <h1>How It Works</h1>
                <div className="work-step">
                    <div className="work-step-one">
                        <div className="work-step-icon"><LuUpload /></div>
                        <div className="work-step-des">
                            <h2>Upload Data</h2>
                            <p>Upload recipient details, organization info, and certificate requirements for automatic, personalized certificate generation.
                            </p>
                        </div>
                    </div>
                    <div className="work-step-one two">
                        <div className="work-step-icon"><BiCustomize /></div>
                        <div className="work-step-des">
                            <h2>Customize Certificates</h2>
                            <p> Provide info and template, or choose from our library, for tailored certificates matching your brand and needs.
                            </p>
                        </div>
                    </div>
                    <div className="work-step-one">
                        <div className="work-step-icon"><LuUpload /></div>
                        <div className="work-step-des">
                            <h2>Send & Track</h2>
                            <p>Customize emails, add recipient details, and track certificate delivery in real-time with seamless tracking and updates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work-step">
                    <div className="work-step-one">
                        <div className="work-step-icon"> <i className="fa-solid fa-stopwatch-20"></i></div>
                        <div className="work-step-des">
                            <h2>Save Time and Money</h2>
                            <p> Issue any number of certificates swiftly and cost-effectively, without compromising on quality or security measures.
                            </p>
                        </div>
                    </div>
                    <div className="work-step-one two">
                        <div className="work-step-icon"> <i class="fa-solid fa-comments-dollar"></i></div>
                        <div className="work-step-des">
                            <h2>Pay Online in Seconds</h2>
                            <p> Pay for required certificates and generate them instantly, with transparent pricing and secure payment processing.
                            </p>
                        </div>
                    </div>
                    <div className="work-step-one">
                        <div className="work-step-icon"><i class="fa-solid fa-thumbs-up"></i></div>
                        <div className="work-step-des">
                            <h2>Satisfaction Guarantee</h2>
                            <p>Enjoy 24/7 dedicated support for a hassle-free experience, with prompt issue resolution and expert assistance.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing" id='pricing'>
                <h1>Choose Your Plan</h1>
                <div className="pricing-container">
                    <div className="pricing-box">
                        <div className="icon"> <i class="fa-solid fa-bolt"></i></div>
                        <div className="pricing-heading">
                            <h3>Basic Plan</h3>
                            <h1>₹399<span>+GST</span> </h1>
                        </div>
                        <div className="pricing-features">
                            <p><i class="fa-solid fa-square-check"></i><span>100 Certificates</span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Edit option </span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Custom mail format
                            </span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Lifetime verification and access</span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Unique QR code and download link</span></p>

                        </div>
                        <div className="pricing-btn">
                            <a href="https://wa.me/7653833191?text=I'm%20interested%20in%20the%20Basic%20Plan"><button>Buy Now</button></a>
                        </div>
                    </div>
                    <div className="pricing-box">

                        <div className="icon"> <i class="fa-solid fa-layer-group"></i> </div>
                        <div className="pricing-heading">
                            <h3>Premium Plan</h3>
                            <h1>₹1750<span>+GST</span> </h1>
                        </div>
                        <div className="pricing-features">
                            <p><i class="fa-solid fa-square-check"></i><span>500 Certificates</span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Edit option </span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Custom mail format
                            </span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Lifetime verification and access</span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Unique QR code and download link</span></p>

                        </div>
                        <div className="pricing-btn">
                            <a href="https://wa.me/7653833191?text=I'm%20interested%20in%20the%20Premium%20Plan"><button>Buy Now</button></a>

                        </div>
                    </div>
                    <div className="pricing-box">
                        <div className="icon">
                            <i class="fa-solid fa-crown"></i>
                        </div>
                        <div className="pricing-heading">
                            <h3>Business Premium Plan</h3>
                            <h1>Talk to Sales </h1>
                        </div>
                        <div className="pricing-features">
                            <p><i class="fa-solid fa-square-check"></i><span>Certificates on Demand </span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Edit option </span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Custom mail format
                            </span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Lifetime verification and access</span></p>
                            <p><i class="fa-solid fa-square-check"></i><span>Unique QR code and download link</span></p>

                        </div>
                        <div className="pricing-btn">
                            <a href="https://wa.me/7653833191?text=I'm%20interested%20in%20the%20Business%20Premium%20Plan"> <button>Get Quatation</button></a>
                        </div>
                    </div>

                </div>
            </div>

            {/* About us */}
            <div id='about'>
                <h1>Who We Are</h1>
                <div className='about'>
                    <div className="about-left">
                        <img src={about_img} className='about-img' />
                    </div>
                    <div className="about-right">
                        <h2>Empowering Trust With Verifiable Credentials</h2>
                        <p  >
                            Create stunning, professional certificates with unmatched speed and ease. Our platform is designed to simplify the entire certification process, from initial design to final delivery. Choose from our vast library of beautiful templates or unleash your creativity with our customization options to perfectly align with your brand identity. Enjoy a seamless experience with our user-friendly interface and dedicated expert support, guiding you every step of the way.

                        </p>
                        <p>We prioritize your security and satisfaction. Our transparent pricing and scalable solutions grow with your needs. <span style={{ color: "royalblue", fontWeight: "500" }}>MyCertificate (Now part of OctaNet) </span> will streamlinestreamline operations, reduce costs, and elevate your brand to new heights</p>
                    </div>
                </div>
            </div>

            {/* Testinomials Section  */}
            <div className="testimonials">
                <p className='para'>Review from our partners</p>
                <h1>Our partners are the</h1>
                <p className='sec-para' >Our members are the heart of everything we do, and we're grateful for their valuable insights and feedback, which help us continuously improve and refine our services to meet their needs, ensure their satisfaction, and build a better experience for everyone in our community.</p>
                <div className='testimonials-box '
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleMouseEnter}
                    onTouchEnd={handleMouseLeave}

                >

                    <div className={`testimonials-inside-box ${currentBox === 0 ? "visible" : ""} `}>
                        <p>I was impressed by how fast my large certificate request was handled - 1200 certificates without a hitch. The process was incredibly smooth.</p>
                        <div>
                            <img src={img1} alt="" />
                            <h2>Rajendra Prasad <br /> <span>Founder, Darhub Automation Pvt. Ltd</span> </h2>
                        </div>
                    </div>
                    <div className={`testimonials-inside-box ${currentBox === 1 ? "visible" : ""} `}>
                        <p>The website is a very easy to use, with a really nice interface that makes navigating and understanding simpler. But what really stood out was the support team's prompt and helpful responses.</p>
                        <div>
                            <img src={img2} alt="" />
                            <h2>Sachidananda Prusty  <br /><span>CEO, INDMEET</span> </h2>
                        </div>
                    </div>
                    <div className={`testimonials-inside-box ${currentBox === 2 ? "visible" : ""} `}>
                        <p>I have tried other certificate issuance before but this one really good. I'm so happy with the customisation options - being able to tailor the email and certificate to our needs made all the difference. Very satisfactory experience!</p>
                        <div>
                            <img src={img3} alt="" />
                            <h2>Shivam Kumar  <br /><span>GDSC Lead '23</span> </h2>
                        </div>
                    </div>
                </div>


            </div>





            {/* Contact Us */}
            <div className="main-contact" id='contact'>
                <h1>Get in Touch</h1>
                <div className='contact' >
                    <div className="contact-col">
                        <h3>Send us message <img src={msg_icon} alt="" /></h3>
                        <p> Have a question or need assistance? We're here to help!  Fill out you basic details along with your message and we'll get back to you shortly.</p>
                        <ul>
                            <li><i class="fa-solid fa-message"></i>info.mycertificate@octanet.in</li>
                            <li><i class="fa-solid fa-phone-volume"></i>+91 76538 33191</li>
                            <li><i class="fa-solid fa-location-dot"></i>Bhubaneswar Odisha India</li>
                        </ul>
                    </div>
                    <div className="contact-col">
                        <form onSubmit={onSubmit} >
                            <label htmlFor="">Your name</label>
                            <input type="text" name='name' placeholder='Enter your name' required />
                            <label htmlFor="">Phone no</label>
                            <input type="tel" name='phone' placeholder='Enter you mobile no' required />
                            <label htmlFor="">Write your message here</label>
                            <textarea name="message" rows="6" placeholder='Enter your messeage' required></textarea>
                            <button type='submit' className='btn'>Submit now <img src={white_arrow} alt="" /></button>
                        </form>
                        <span>{result}</span>
                    </div>
                </div>
            </div>
            {/* Message Section */}

            <div className='footer' id='footer'>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <h1 style={{ color: "#fff" }} >Let's Connect</h1>
                        <p>Certify with ease! Our platform revolutionizes the way organizations issue certificates, making it fast, secure, and affordable. With instant issuance, no volume limits, and 24/7 support.</p>
                        <div className="footer-social-icons">
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                            <a href="https://www.instagram.com/mycertificate.in?igsh=MXBpZWJicXR0Y2ludg=="> <img src={insta} alt="" /></a>
                        </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Pricing</li>
                            <li><a href="/index.html" target="_blank" rel="noopener noreferrer" style={{ color: "#d9d9d9" }} >Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 76538 33191</li>
                            <li>info.mycertificate@octanet.in</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className='footer-copyright'>
                    <span>Copyright © 2024   My Certificate </span>    <a href="/index.html" target="_blank" rel="noopener noreferrer" >Privacy Policy</a>
                </p>
            </div>

        </>
    )
}