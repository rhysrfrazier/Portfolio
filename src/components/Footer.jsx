export default function Footer() {
    return (
        <div className='footer'>
            <div className="socials">
                <a href='https://github.com/rhysrfrazier' target='_blank'>
                    <i className="fa-brands fa-github fa-2x" aria-hidden='true'>
                        <span className='fa-sr-only'>Rhys' Github Link</span>
                    </i>
                </a>
                <a href='https://www.linkedin.com/in/rhysrfrazier/' target='_blank'>
                    <i className="fa-brands fa-linkedin-in fa-2x" aria-hidden='true'>
                        <span className='fa-sr-only'>Rhys' LinkedIn Link</span>
                    </i>
                </a>
            </div>

            <div className='footerContact'>
                <p className='footerName'>Rhys Frazier</p>
                <p>Frederick, MD USA</p>
                <p><a href='mailto:rhysrfrazier@gmail.com' target='_blank' className='tempLink'>rhysrfrazier@gmail.com</a></p>
            </div>
        </div>
    )
}