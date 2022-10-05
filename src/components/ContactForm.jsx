import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
    const form = useRef()
    const navigate = useNavigate()

    console.log('display .env contents')
    console.log(process.env.REACT_APP_EMAILJS_API_PUBLIC_KEY)
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID)

    const sendEmail = e => {
        e.preventDefault()

        try {
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
                        navigate('/success')
                    },
                    error => {
                        const state = {
                            errorMessage: error.text,
                        }
                        navigate('/error', { state })
                    }
                )
        } catch (err) {
            const state = {
                errorMessage: err,
            }
            navigate('/error', { state })
        }
    }

    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            message: '',
        },

        validationSchema: Yup.object({
            user_name: Yup.string().required(),
            user_email: Yup.string().email().required(),
            message: Yup.string(),
        }),
        onSubmit: function (values) {
            sendEmail(values)
        },
    })

    return (
        <div className='contact-form-container'>
            <form
                ref={form}
                onSubmit={formik.handleSubmit}
                className='contact-form'
            >
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
