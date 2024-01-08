export default function Resume() {

    return (
        <div className='resumeContainer'>
            <div className='resumeLeft'>
                <p className='blurb'>
                    I like front and back end development equally well, and so far have split my skill points pretty evenly between the two. I have experience working with the following technologies:
                </p>
                <div className='xpStack'>
                    <div className='xpTechBlock'>
                        <p>JavaScript</p>
                        <img className='xpIcon' src='javascript-logo-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>HTML5</p>
                        <img className='xpIcon' src='html5-01-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>CSS3</p>
                        <img className='xpIcon' src='css3-02-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>React</p>
                        <img className='xpIcon' src='react-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>PostgreSQL</p>
                        <img className='xpIcon' src='postgresBlue.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Sequelize</p>
                        <img className='xpIcon' src='sequelizeBlue.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Node</p>
                        <img className='xpIcon' src='node-js-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Express</p>
                        <img className='xpIcon' src='blueexpress.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>MongoDB</p>
                        <img className='xpIcon' src='mongodb-svgrepo-com.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Mongoose</p>
                        <img className='xpIcon' src='bluemongoose.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Markdown</p>
                        <img className='xpIcon' src='MDBlue.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>C#</p>
                        <img className='xpIcon' src='c--4.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Python</p>
                        <img className='xpIcon' src='pythonBlue.png' aria-hidden='true'></img>
                    </div>
                    <div className='xpTechBlock'>
                        <p>Django</p>
                        <img className='xpIcon' src='djangoBlue.png' aria-hidden='true'></img>
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