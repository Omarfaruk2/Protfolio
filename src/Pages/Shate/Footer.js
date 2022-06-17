import React from 'react'
import Wave from 'react-wavify'

const Footer = () => {



    return (

        <div>

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
            </Wave>
        </div>
    )
}

export default Footer