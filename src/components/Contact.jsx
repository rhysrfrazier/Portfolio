import React, { useState } from 'react'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [nope, setNope] = useState('')

    const handleSubmit = (e) => {
        if(nope !== ''){
            console.error('bot')
        }
        e.preventDefault()
        console.log(name, email, subject, message)
        window.alert("Message sent! I'll get back to you as soon as I can.")
        setTimeout(() => location.reload(), 50)
    }

    return (
        <div className='contactContainer'>
            <h1>Send Me a Message</h1>
            <p>Have any questions or feedback? I'd love to hear from you!</p>
            <form className='contactForm' onSubmit={handleSubmit}>
                <div className='nameEmail'>
                    <label className='name'>
                        <span className='labelText'>Your name:</span>
                        <input name='name' id='name' value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <label className='email'>
                        <span className='labelText'>Your email:</span>
                        <input name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                </div>
                <br />
                <label>
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
                        cols={50}
                        id='message'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </label>
                <input type='hidden' name='nope' value={nope} onChange={e => setNope(e.target.value)} />
                <br />
                <div className='sendMessageContainer'>
                    <button type='submit'
                    className='sendMessage'
                    onClick={handleSubmit}
                    >Send</button>
                </div>
            </form>
        </div>
    )
}