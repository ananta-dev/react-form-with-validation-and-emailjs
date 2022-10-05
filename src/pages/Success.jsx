import React from 'react'
import './Success.css'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate = useNavigate()

    return (
        <div className='success'>
            <h1>Thank you!</h1>
            <p>Your interest is very encouraging.</p>
            <p>
                You will receive an email as soon as the portfolio website is
                ready.
            </p>
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

export default Success
