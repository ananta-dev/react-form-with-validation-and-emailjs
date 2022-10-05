import React from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
    const navigate = useNavigate()

    const sendEmail = values => {
        try {
            emailjs
                .send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    values,
                    process.env.REACT_APP_EMAILJS_API_PUBLIC_KEY
                )
                .then(
                    result => {
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
            user_name: Yup.string().required('Name is required'),
            user_email: Yup.string()
                .email('Please enter valid email address')
                .required('Email address is required'),
            message: Yup.string(),
        }),
        onSubmit: function (values) {
            console.log('in useFormik --- onSubtit function Values:')
            console.log({ values })

            sendEmail(values)
        },
    })

    return (
        <div className='contact-form-container'>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    formik.handleSubmit(e)
                }}
                className='contact-form'
            >
                <label>Name</label>
                <input
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_name}
                    name='user_name'
                />
                {formik.touched.user_name && formik.errors.user_name && (
                    <span className='form-error-warning'>
                        {formik.errors.user_name}
                    </span>
                )}
                <label>Email</label>
                <input
                    type='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_email}
                    name='user_email'
                />
                {formik.touched.user_email && formik.errors.user_email && (
                    <span className='form-error-warning'>
                        {formik.errors.user_email}
                    </span>
                )}
                <label>Message (Optional)</label>
                <textarea
                    name='message'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}

export default ContactForm
