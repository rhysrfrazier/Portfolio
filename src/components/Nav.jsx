import { Link, useLocation } from 'react-router-dom'

export default function Nav() {

    const location = useLocation()

    const makeActive = (routeSlug) => {
        if (routeSlug === location.pathname) {
            return 'selected'
        } else {
            return ''
        }
    }

    return (
        <div className='navbar'>
            <div className='navName'>
                <h1>Rhys Frazier</h1>
                <h2 className='navSubtitle'>Junior Software Engineer</h2>
            </div>
            <div className='navLinks'>
                <Link to='/' >
                    <h2 className={makeActive('/')}>About</h2>
                </Link>
                <Link to='/projects' >
                    <h2 className={makeActive('/projects')}>Projects</h2>
                </Link>
                {/* <Link to='/resume' >
                <h2 className={makeActive('/resume')}>Resume</h2>
            </Link> */}
                <Link to='/contact' >
                    <h2 className={makeActive('/contact')}>Get in Touch</h2>
                </Link>
            </div>
        </div>
    )
}