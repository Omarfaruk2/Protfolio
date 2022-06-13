import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "../Home/Projects.css"
import img1 from "../../../src/img/sc1.png"
import img2 from "../../../src/img/sc2.png"
import img3 from "../../../src/img/sc3.png"
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()


const Projects = () => {

    return (
        <div id='project' className='container py-5' >
            <h2 className='text-white mb-5' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">My Projects</h2>
            <div className='row m-0 p-0'>
                <div className='col-lg-4'
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="700"
                >
                    <Card className='p-2'>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title >Lights Manufacturer </Card.Title>
                            <Card.Text className='hight'>
                                Any user can order bulbs from here and pay the order by credit or debit card..
                                If he pays the price then he cannot cancel the order. You must login before ordering bulbs.
                                Admin can add and delete new bulbs if desired.Admin can make new admin.Unapproved, forbidden access protected by JWT. <br />
                                <b>Technology Used:</b> HTML, CSS3, Tailwind CSS, Daisy UI, React.js, Node.js, Express.js,Mongodb, Firebase, JWT.

                            </Card.Text>
                            {/*-------------------- Button ----------------*/}

                            <a href="https://assigment-12-12cd5.web.app/" target="_blank" rel="noreferrer" >
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'> Live Site </span></Button>
                            </a>
                            <a href="https://github.com/Omarfaruk2/LIght-Manufacture-client" target="_blank" rel="noreferrer" >
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'>Client Site Code </span></Button>
                            </a>
                            <a href="https://github.com/Omarfaruk2/Light-Menufacture-server" target="_blank" rel="noreferrer" >
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'> Server Site Code </span></Button>
                            </a>

                        </Card.Body>
                    </Card>
                </div>

                {/* Number 2 */}
                <div className='col-lg-4'
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1100"
                >
                    <Card className='p-2'>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title >MOBILE-HUNTER </Card.Title>
                            <Card.Text className='hight'>
                                This is a mobile stock update and stock reduction dynamic website. A user can update or reduce the stock of the mobile as per his choice and also see the details of that product..
                                He can add or delete any new product if he wants.
                                Under no circumstances will the user be able to perform the functions of the Website without logging in
                                <br />
                                <b>Technology Used:</b> HTML, CSS3, Bootstrap, React.js, Node.js, Express.js,Mongodb, Firebase, JWT.


                            </Card.Text>
                            {/*-------------------- Button ----------------*/}

                            <a href="https://assigment-11-d5db3.web.app/" target="_blank" rel="noreferrer">
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'> Live Site </span></Button>
                            </a>
                            <a href="https://github.com/Omarfaruk2/Mobile-Hunter-Client" target="_blank" rel="noreferrer">
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'>Client Site Code </span></Button>
                            </a>
                            <a href="https://github.com/Omarfaruk2/Mobile-Hunter-Server-site" target="_blank" rel="noreferrer">
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'> Server Site Code </span></Button>
                            </a>

                        </Card.Body>
                    </Card>
                </div>
                {/* Number 3 */}
                <div className='col-lg-4'
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                >
                    <Card className='p-2'>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title >Dynamo Fitness </Card.Title>
                            <Card.Text className='hight'>
                                This is a gym related website. If you want any use you can buy gym course of your choice.
                                In this case, he is obliged to login.
                                <br />
                                <b>Technology Used:</b> HTML, CSS3, Boostrap, React.js,React router etc.

                            </Card.Text>
                            {/*-------------------- Button ----------------*/}

                            <a href="https://gym-center-f59ed.web.app/" target="_blank" rel="noreferrer">
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'> Live Site </span></Button>
                            </a>
                            <a href="https://github.com/Omarfaruk2/Gym-Center" target="_blank" rel="noreferrer">
                                <Button className='w-100 my-2' variant="outline-secondary"><span className='color fw-bold'>Client Site Code </span></Button>
                            </a>

                        </Card.Body>
                    </Card>
                </div>


            </div>
        </div>

    )
}

export default Projects