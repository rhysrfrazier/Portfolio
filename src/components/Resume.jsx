export default function Resume() {

    return (
        <div className='resumeContainer' id='resume' data-section>
            <div className='resumeLeft'>
                <p>
                    I'm a generalist, and my skill points are spread evenly between front and back end development.
                </p>
                <p className='blurb'>I have experience working with the following technologies:</p>
                <div className='xpStack'>
                    <div className='xpTechBlock'>
                        <p>JavaScript</p>
                        <img className='xpIcon' src='javascript.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>HTML5</p>
                        <img className='xpIcon' src='html5.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>CSS3</p>
                        <img className='xpIcon' src='css.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>React</p>
                        <img className='xpIcon' src='react.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Next.JS</p>
                        <img className='xpIcon' src='nextjs.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>PostgreSQL</p>
                        <img className='xpIcon' src='psql.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Sequelize</p>
                        <img className='xpIcon' src='sequelize.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Node.JS</p>
                        <img className='xpIcon' src='nodejs.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Express</p>
                        <img className='xpIcon' src='express.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>MongoDB</p>
                        <img className='xpIcon' src='mongodb.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Mongoose</p>
                        <img className='xpIcon' src='mongoose.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Markdown</p>
                        <img className='xpIcon' src='markdown.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>C#</p>
                        <img className='xpIcon' src='csharp.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Python</p>
                        <img className='xpIcon' src='python.svg' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Django</p>
                        <img className='xpIcon' src='django.svg' aria-hidden='true'></img>
                    </div>
                </div>

                <p className='whatElseIntro'>What else?</p>
                <div className='whatElse'>
                    <ul className='attributesLeft'>
                        <li>
                            <img src='userfocus.svg' aria-hidden='true' className='xpIcon' />
                            Customer/user focused
                        </li>
                        <li>
                            <img src='problemsolving.svg' aria-hidden='true' className='xpIcon' />
                            Tenacious problem-solver
                        </li>
                        <li>
                            <img src='communication.svg' aria-hidden='true' className='xpIcon' />
                            Courteous, professional communicator
                        </li>
                    </ul>
                    <ul className='attributesRight'>
                        <li>
                            <img src='learning.svg' aria-hidden='true' className='xpIcon' />
                            Eager to learn
                        </li>
                        <li>
                            <img src='collaboration.svg' aria-hidden='true' className='xpIcon' />
                            Cross-functional team player
                        </li>
                        <li>
                            <img src='working.svg' aria-hidden='true' className='xpIcon' />
                            Hard worker
                        </li>
                    </ul>
                </div>
            </div>

            <p className='resumeIntro'>Interested in my job history? Download my full resume:</p>
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