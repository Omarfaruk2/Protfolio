import React from 'react'
import "../Home/About.css"
import aboutimg1 from "../../../src/img/tyne.jpeg"

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()

const About = () => {
    return (
        <div id='about' className='row ms-0 me-0 mb-0 py-5 p-0 mx-auto pt-5 background'>
            <div className='col-lg-2 '>

            </div>

            <div className="col-lg-4"
                // data-aos="zoom-in-right"
                data-aos="fade-right"
                data-aos-duration="1500"
            >
                <img width="300px" src={aboutimg1} alt="" />
            </div>

            <div className="col-lg-4 text-white" >
                <div data-aos="fade-left">
                    <h4 className='color'>Who I am <span className='fw-bold'>-------</span></h4>
                    <h4>About Me</h4>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <span >I'm Omar Faruk, a Junior Fron-end Developer and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.
                        <br />
                        I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.
                        <br />
                        Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.</span>

                </div>
            </div>
            <div className='col-lg-2 '>

            </div>
        </div>
    )
}

export default About