export default function Resume() {

    return (
        <div className='resumeContainer' id='resume'>
            <div className='resumeLeft'>
                <p>
                    I'm a generalist, and my skill points are spread evenly between front and back end development.
                </p>
                <p className='blurb'>I have experience working with the following technologies:</p>
                <div className='xpStack'>
                    <div className='xpTechBlock'>
                        <p>JavaScript</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>HTML5</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>CSS3</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>React</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Next.JS</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>PostgreSQL</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Sequelize</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Node</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Express</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>MongoDB</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Mongoose</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Markdown</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>C#</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Python</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Django</p>
                        <img className='xpIcon' src='d' aria-hidden='true'></img>
                    </div>
                </div>

                <p className='whatElseIntro'>What else?</p>
                <div className='whatElse'>
                    <ul className='attributesLeft'>
                        <li>
                            <img src='d' aria-hidden='true' className='xpIcon' />
                            Hard worker
                        </li>
                        <li>
                            <img src='d' aria-hidden='true' className='xpIcon' />
                            Tenacious problem-solver
                        </li>
                        <li>
                            <img src='d' aria-hidden='true' className='xpIcon' />
                            Cross-functional team player
                        </li>
                    </ul>
                    <ul className='attributesRight'>
                        <li>
                            <img src='d' aria-hidden='true' className='xpIcon' />
                            Eager to learn
                        </li>
                        <li>
                            <img src='d' aria-hidden='true' className='xpIcon' />
                            Customer/user focused
                        </li>

                        <li>
                            <img src='d' aria-hidden='true' className='xpIcon' />
                            Courteous, professional communicator
                        </li>
                    </ul>
                </div>
            </div>

            <p className='resumeIntro'>Check out my full resume for job history:</p>
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