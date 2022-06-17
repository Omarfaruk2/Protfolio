import React, { useRef } from 'react'
import "./Contact.css"
import { GeoAltFill, Envelope, Telephone } from 'react-bootstrap-icons'
import emailjs from '@emailjs/browser'
// AiOutlineEnvironment
// {/* <Envelope></Envelope> <Telephone></Telephone> */}

const Contact = () => {
    const form = useRef()

    const handleFormSubmit = (event) => {
        event.preventDefault()

        // const name = event.target.name.value
        // const email = event.target.email.value
        // const number = event.target.number.value
        // const textarea = event.target.textarea.value

        // const data = {
        //     name: name,
        //     email: email,
        //     number: number,
        //     textarea: textarea,
        // }


        emailjs.sendForm('service_cns8tpm', 'template_fszc5oj', form.current, 'TxwQ895uVKQmBOcFr')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        // console.log("submitted", data)


        // event.target.name.value = ""
        // event.target.email.value = ""
        // event.target.number.value = ""
        // event.target.textarea.value = ""
    }


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


                    <form ref={form} onSubmit={handleFormSubmit} >
                        <input className='nameInput  mx-auto inputFrom' placeholder='Your Full Name' type="text" name="name" id="" required />
                        <div className='mt-3 d-flex justify-content-center  align-items-center'>
                            <div className=' emailInput' >
                                <input className='w-100 inputFrom ' placeholder='Your Email' type="email" name="email" id="" required />
                            </div>
                            <div className='numberInput mx-1'>
                                <input className='w-100 inputFrom' placeholder='Your Number' type="number" name="number" id="" required />
                            </div>
                        </div>
                        <div>
                            <textarea className='w-75 my-3 ' placeholder='Enter Your Message' name='message' required></textarea>
                        </div>
                        <input className='submit' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact