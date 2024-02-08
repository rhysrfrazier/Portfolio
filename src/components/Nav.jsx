import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Nav({selectedItem}) {
    console.log(selectedItem)

    const [burgerState, setBurgerState] = useState(false)

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
                <img className='RFlogo' src='RF.png' alt='RF initials in the style of the JavaScript logo' />
                <div className='namenTitle'>
                    <p>Rhys Frazier</p>
                    <p className='jobTitle'>Junior Software Engineer</p>
                </div>
            </div>

            {/* desktop */}
            <div className='navLinks'>
                <Link
                    onClick={() => {
                        let about = document.getElementById('about');
                        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                >
                    <h2 className={selectedItem === 'about' ? 'selected' : ''}>About</h2>
                </Link>
                <Link
                    onClick={() => {
                        let resume = document.getElementById('resume');
                        resume.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <h2 className={selectedItem === 'resume' ? 'selected' : ''}>Skills and Experience</h2>
                </Link>
                <Link
                    onClick={() => {
                        let projects = document.getElementById('projects');
                        projects.scrollIntoView({ behavior: 'smooth'});
                    }}
                >
                    <h2 className={selectedItem === 'projects' ? 'selected' : ''}>Projects</h2>
                </Link>
                <Link
                    onClick={() => {
                        let contact = document.getElementById('contact');
                        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                >
                    <h2 className={selectedItem === 'contact' ? 'selected' : ''}>Get in Touch</h2>
                </Link>
            </div>

            {/* mobile menu */}
            <button className='navBurger' onClick={revealMenu}>
                <i className="fa-solid fa-bars fa-3x" aria-hidden='true'>
                    <span className='fa-sr-only'>Open navigation menu</span>
                </i>
            </button>
            {burgerState ? <div className='burgerMenu'>
                <Link
                    onClick={() => {
                        let about = document.getElementById('about');
                        revealMenu();
                        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                ><h2>About</h2></Link>
                <Link onClick={() => {
                    let resume = document.getElementById('resume');
                    revealMenu();
                    resume.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}>
                    <h2 className={makeActive('/resume')}>Skills and Experience</h2>
                </Link>
                <Link onClick={() => {
                    let projects = document.getElementById('projects');
                    revealMenu();
                    projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}>
                    <h2 className={makeActive('/projects')}>Projects</h2>
                </Link>
                <Link onClick={() => {
                    let contact = document.getElementById('contact');
                    revealMenu();
                    contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}>
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