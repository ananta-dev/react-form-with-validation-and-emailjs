import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const ContactForm = () => {
    const form = useRef()

    const sendEmail = e => {
        e.preventDefault()

        emailjs
            .sendForm(
                'freenrg_2721987G9187YUI',
                'template_5ypv78d',
                form.current,
                'mLJ4O0x0IgV--MoHn'
            )
            .then(
                result => {
                    console.log(result.text)
                    console.log('message sent')
                },
                error => {
                    console.log('error while attempting to send email')
                    console.log(error.text)
                }
            )
    }

    return (
        <div className='contact-form-wrapper'>
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
