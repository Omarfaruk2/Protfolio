import React from 'react'
// import Wave from 'react-wavify' BsTwitter
import { Twitter, Linkedin } from 'react-bootstrap-icons'
import "../Shate/Footer.css"


const Footer = () => {



    return (

        <div className='width'>
            <div className='row m-0 p-0'>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">© Copyright 2022. All right reserved</div>
                <div className="col-lg-4">
                    <a target="_blank" href="">
                        <Twitter></Twitter>
                    </a>
                    <a target="_blank" href="">
                        <Linkedin></Linkedin>
                    </a>
                    <a target="_blank" href=""></a>

                </div>
            </div>


            {/* 
            <Wave mask="url(#mask)" fill="#0fb" >

                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="white" />
                        <stop offset="0.45" stopColor="black" />
                    </linearGradient>

                    <mask id="mask">
                        <rect x="0" y="0" width="2000" height="400" fill="url(#gradient)" />
                    </mask>
                </defs>

            </Wave> */}

        </div>
    )
}

export default Footer