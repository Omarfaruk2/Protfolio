import React from 'react'
import "../Home/About.css"
// import aboutimg from "../../../src/img/about.jpeg"
import aboutimg1 from "../../../src/img/tyne.jpeg"

const About = () => {
    return (
        <div className='row ms-0 me-0 mb-0 p-0 mx-auto pt-5 background'>
            <div className='col-lg-2 '>

            </div>
            <div className="col-lg-4 ">
                <img width="300px" src={aboutimg1} alt="" />
            </div>
            <div className="col-lg-4 text-white">
                <h4 className='color'>Who I am <span className='fw-bold'>-------</span></h4>
                <h4>About Me</h4>
                <span>I'm Omar Faruk, a Junior Fron-end Developer and talented Product Designer with front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.
                    <br />
                    I develop websites with HTML, CSS and JavaScript. I have top skills in using design softwares like Figma, Adobe XD, Invision and PhotoShop; with prototype tools like Framer and Protopie.
                    <br />
                    Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.</span>
            </div>
            <div className='col-lg-2 '>

            </div>
        </div>
    )
}

export default About