import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {
    const form = useRef()
    const navigate = useNavigate()

    console.log('display .env contents')
    console.log(process.env.REACT_APP_EMAILJS_API_PUBLIC_KEY)
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID)

    const sendEmail = e => {
        e.preventDefault()

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_API_PUBLIC_KEY
            )
            .then(
                result => {
                    console.log(result.text)
                    console.log('message sent')
                    navigate('/success')
                },
                error => {
                    console.log('error while attempting to send email')
                    console.log(error.text)
                }
            )
    }

    return (
        <div className='contact-form-container'>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                {' '}
                <label>Name</label>
                <input type='text' name='user_name' />
                <label>Email</label>
                <input type='email' name='user_email' />
                <label>Message</label>
                <textarea name='message' />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}

export default ContactForm
