import React from 'react'
import { Button } from 'react-bootstrap'
import computer from "../../../src/img/computer.png"
import "../Home/Banner.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {

    return (
        <div className='row p-0 m-0 d-flex justify-content-center align-items-center'>
            <div className='col-lg-4 text-white'>
                <div>
                    <h4>
                        HI THERE I'M
                    </h4>
                </div>
                <h1 className='color'>Omar Faruk </h1>
                <b className='background'>I'm a Jonior Front-End Developer.Being a diligent, hardworking and result oriented Men, I always work towards achieving best result on each project I lay my hands on.</b> <br />
                <Button className='color' variant="outline-primary">Hire Me</Button>{' '}
            </div>



            <div className='col-lg-6 bannerImg'>
                <img width="600px" src={computer} alt="" />
            </div>
        </div>
    )
}

export default Banner