import React from 'react'
import './Error.css'
import { useNavigate, useLocation } from 'react-router-dom'

function Error({ errorMessage }) {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className='error'>
            <h1>Error while sending message to Juan &#x1F62D;</h1>
            <p>
                Unfortunately, an error ocurred while attempting to send email
                to Juan via EmailJS service.
            </p>
            <p>
                If you wish to help Juan, please send him an email at
                juan@freenrg.dev with the following error message:
            </p>
            <p className='error-message'>"{location.state.errorMessage}"</p>
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='back-to-form'
            >
                Back to Form
            </button>
        </div>
    )
}

export default Error
