import React from 'react'
import "./Contact.css"
import { GeoAltFill, Envelope, Telephone } from 'react-bootstrap-icons'
// AiOutlineEnvironment
// {/* <Envelope></Envelope> <Telephone></Telephone> */}

const Contact = () => {

    return (
        <div className='py-5'>
            <div>
                <h3 className='text-center text-white'>Contact Me -</h3>
            </div>
            <div className='text-center text-white'>
                <h4>Get In Touch</h4>
                <p>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
            </div>
            <div className=' text-white row m-0 p-0'>

                <div className="col-lg-2"></div>

                <div className="col-lg-4">

                    <div className='d-flex fw-bold  align-items-center my-4 '>
                        <div>
                            <GeoAltFill className='icon'></GeoAltFill>
                        </div>
                        <span className='ms-3'>Raozan, Chittagong</span>
                    </div>

                    <div className='d-flex  fw-bold  align-items-center my-4'>
                        <div>
                            <Envelope className='icon text-dark'></Envelope>
                        </div>
                        <span className='ms-3'>omarfaruk.dep@gmail.com</span>
                    </div>
                    <div className='d-flex  fw-bold  align-items-center my-4'>
                        <div>
                            <Telephone className='icon'></Telephone>
                        </div>
                        <span className='ms-3'>Raozan, Chittagong</span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h4> From</h4>
                    <div >
                        <input className='w-75  mx-auto inputFrom' type="text" name="name" id="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact