import React from 'react'
import About from './About'
import Banner from './Banner'
import Contact from './Contact'
import "./Home.css"
import Navber from './Navber'
import Projects from './Projects'

const Home = () => {

    return (
        <div>

            <div className='background'>
                <Navber></Navber>
                <Banner></Banner>
                <About></About>
                <Projects></Projects>
                <Contact></Contact>
            </div>


        </div>

    )
}

export default Home