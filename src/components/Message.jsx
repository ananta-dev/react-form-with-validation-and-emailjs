import React from 'react'
import './Message.css'

function Message() {
    return (
        <div className='message-container'>
            <div className='message-wrapper'>
                <h2>Looking for Juan Guirao's portfolio?</h2>
                <p>Juan is currently working on it!</p>
                <p>
                    If you would like him to notify you when his portfolio
                    website is ready, please use the form to the right to leave
                    your email address. Juan will ping you as soon as he has
                    deployed it.
                </p>
            </div>
        </div>
    )
}

export default Message
