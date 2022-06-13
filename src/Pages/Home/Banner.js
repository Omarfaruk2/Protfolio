import React from 'react'
import { Button } from 'react-bootstrap'
import computer from "../../../src/img/computer.png"
import "../Home/Banner.css"
import 'aos/dist/aos.css'
import TextTransition, { presets } from "react-text-transition"

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const TEXTS = [
    "Front-End Developer",
    "MERN STACK"

]

const Banner = () => {

    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000
        )
        return () => clearTimeout(intervalId)
    }, [])




    return (
        <div id='home' className='row p-0 m-0 d-flex justify-content-center align-items-center'>

            <div className='col-lg-4 text-white' data-aos="fade-up"
                data-aos-duration="3000">
                <div>
                    <h4>
                        HI THERE I'M
                    </h4>
                    <h3 className='text-center ms-5'>
                        <TextTransition
                            text={TEXTS[index % TEXTS.length]}
                            springConfig={presets.wobbly}
                        />
                    </h3>

                </div>
                <h1 className='color'>Omar Faruk </h1>
                <b className='background'>I'm a Jonior Front-End Developer.Being a diligent, hardworking and result oriented Men, I always work towards achieving best result on each project I lay my hands on.</b> <br />
                <Button className='color' variant="outline-primary">Hire Me</Button>{' '}
            </div>

            <div className='col-lg-6 bannerImg'
                data-aos="fade-left"
                data-aos-duration="1500">
                <img width="600px" src={computer} alt="" />
            </div>
        </div>
    )
}

export default Banner