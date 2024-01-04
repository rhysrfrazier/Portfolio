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
                <div className='tooltip'>
                    <a href='Rhys_Frazier_Resume.pdf' download='Rhys_Frazier_Full_CV'>
                        <img src='icons8-resume-100.png' alt='resume' className='resume' />
                    </a>
                    <span className='tipText'>Download Full Resume</span>
                </div>
            </div>

            <div className='footerContact'>
                <p className='footerName'>Rhys Frazier</p>
                <p>Frederick, MD USA</p>
                <p><a href='mailto:rhysrfrazier@gmail.com' target='_blank' className='tempLink'>rhysrfrazier@gmail.com</a></p>
            </div>
        </div>
    )
}