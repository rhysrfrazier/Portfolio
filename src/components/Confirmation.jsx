import { Link } from "react-router-dom"

export default function() {
    return (
        <div className='confirmation'>
            <img className='airplane' src='airplane.svg' alt='an icon of a paper airplane'/>
            <p>Your email has been sent! I'll get back to you as soon as possible.</p>
            <Link to='/'>Back to rhysfrazier.com</Link>
        </div>
    )
}