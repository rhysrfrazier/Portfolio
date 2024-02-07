import React, { useState } from 'react'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [nope, setNope] = useState('')

    const handleSubmit = (e) => {
        if (nope !== '') {
            console.error('bot')
        }
        e.preventDefault()
        console.log(name, email, subject, message)
        window.alert("Message sent! I'll get back to you as soon as I can.")
        setTimeout(() => location.reload(), 50)
    }

    return (
        <div className='contactContainer' id='contact'>
            <h1>Don't be a Stranger!</h1>
            {/* <p>Find me on  <a href='https://www.linkedin.com/in/rhysrfrazier/' target='_blank' className='tempLink'>LinkedIn</a> or <a href='https://github.com/rhysrfrazier' target='_blank' className='tempLink'>GitHub</a> -- or <a href='mailto:rhysrfrazier@gmail.com' target='_blank' className='tempLink'>email me</a> directly.</p> */}
            <form className='contactForm' action='https://formsubmit.io/send/rhysrfrazier@gmail.com' method='POST'>
            <input name="_redirect" type="hidden" id="name" value="http://localhost:5173/" />
                <div className='nameEmail'>
                    <label className='name'>
                        <span className='labelText'>Your name:</span>
                        <input className='nameInput' name='name' id='name' value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <label className='email'>
                        <span className='labelText'>Your email:</span>
                        <input className='emailInput' name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                </div>
                <br />
                <label className='subject'>
                    <span className='labelText'>Subject:</span>
                    <br />
                    <input name='subject' className='subject' id='subject' value={subject} onChange={e => setSubject(e.target.value)} />
                </label>
                <br />
                <label>
                    <span className='labelText'>Type your message here:</span>
                    <br />
                    <textarea
                        name='message'
                        rows={4}
                        cols={35}
                        id='message'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </label>

                {/* this one's for the bots */}
                <input type='hidden' name='nope' value={nope} onChange={e => setNope(e.target.value)} />

                <br />
                <div className='sendMessageContainer'>
                    <button type='submit'
                        className='sendMessage'
                        // onClick={handleSubmit}
                    >Send</button>
                </div>
            </form>
        </div>
    )
}