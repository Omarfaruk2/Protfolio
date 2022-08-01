import React from 'react'
import Footer from '../Shate/Footer'
import About from './About'
import Banner from './Banner'
import Contact from './Contact'
// import FindeMe from './FindeMe'
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
                {/* <FindeMe></FindeMe> */}

            </div>
            <Footer></Footer>



        </div>

    )
}

export default Home