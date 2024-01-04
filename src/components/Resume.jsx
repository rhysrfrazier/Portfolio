export default function Resume() {

    return (
        <div className='resumeContainer'>
            <div className='resumeLeft'>
                <p className='blurb'>
                    I like front and back end development equally well, and so far have split my skill points pretty evenly between the two. I have experience working with the following technologies:
                </p>
                <div className='xpStack'>
                    <div className='aboutTechBlock'>
                        <p>JavaScript</p>
                        <img className='xpIcon' src='javascript-logo-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                    <div className='aboutTechBlock'>
                        <p>HTML5</p>
                        <img className='xpIcon' src='html5-01-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                </div>
            </div>
            <div className='resumeDownload'>
                <a href='Rhys_Frazier_Resume.pdf' download='Rhys_Frazier_Full_CV'>
                    <i className="fa-solid fa-file-pdf fa-10x resumePDF" aria-hidden='true'>
                        <span className='fa-sr-only'>Download resume</span>
                    </i>
                </a>
                < a href='Rhys_Frazier_Resume.pdf' download='Rhys_Frazier_Full_CV' className='downloadBlurb' aria-hidden='true'>Resume Download</a>
            </div>
        </div>
    )
}