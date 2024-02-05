import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {

    const location = useLocation()
    const [burgerState, setBurgerState] = useState(false)

    const makeActive = (routeSlug) => {
        if (routeSlug === location.pathname) {
            return 'selected'
        } else {
            return ''
        }
    }

    const revealMenu = () => {
        if (burgerState === false) {
            setBurgerState(true)
        } else {
            setBurgerState(false)
        }
    }

    return (
        <div className='navbar'>
            <div className='navName'>
                <img className='RFlogo' src='RF.png' alt='RF initials in the style of the JavaScript logo'/>
            </div>
            <div className='navLinks'>
                <Link to='/' >
                    <h2 className={makeActive('/')}>About</h2>
                </Link>
                <Link to='/resume'>
                    <h2 className={makeActive('/resume')}>Skills and Experience</h2>
                </Link>
                <Link to='/projects' >
                    <h2 className={makeActive('/projects')}>Projects</h2>
                </Link>
                <Link to='/contact'>
                    <h2 className={makeActive('/contact')}>Get in Touch</h2>
                </Link>
            </div>
            <button className='navBurger' onClick={revealMenu}>
                <i className="fa-solid fa-bars fa-3x" aria-hidden='true'>
                    <span className='fa-sr-only'>Open navigation menu</span>
                </i>
            </button>
            {burgerState ? <div className='burgerMenu'>
                <Link to='/' onClick={revealMenu}>
                    <h2 className={makeActive('/')}>About</h2>
                </Link>
                <Link to='/resume' onClick={revealMenu}>
                    <h2 className={makeActive('/resume')}>Skills and Experience</h2>
                </Link>
                <Link to='/projects' onClick={revealMenu}>
                    <h2 className={makeActive('/projects')}>Projects</h2>
                </Link>
                <Link to='/contact' onClick={revealMenu}>
                    <h2 className={makeActive('/contact')}>Get in Touch</h2>
                </Link>
                <Link to='https://github.com/rhysrfrazier' target='_blank' onClick={revealMenu}>
                    <h2>GitHub</h2>
                </Link>
                <Link to='https://www.linkedin.com/in/rhysrfrazier/' target='_blank' onClick={revealMenu}>
                    <h2>LinkedIn</h2>
                </Link>
                <Link to='mailto:rhysrfrazier@gmail.com' target='_blank' onClick={revealMenu}>
                    <h2>Email Me</h2>
                </Link>
                <Link className='lastBurgerLink' to='Rhys_Frazier_Resume.pdf' target='_blank' download onClick={revealMenu}>
                    <h2>Download My Resume</h2>
                </Link>
            </div> : null}
        </div>
    )
}