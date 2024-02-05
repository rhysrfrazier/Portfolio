import { useState } from "react"

const projects = [
    {
        title: 'Pac(ker)Man',
        img: 'p4Screen.png',
        desc: "Pac(ker)Man is a light-weight inventory management system to help keep track of supply locations and states of repair through database SQL manipulation when packing and unpacking. The current iteration allows user to pack and unpack items based on a single, user-generated event to be attended.",
        github: 'https://github.com/rhysrfrazier/packerman',
        app: '',
        demo: 'https://drive.google.com/file/d/1URXGJqfsa5ETjuN_e1XLM0NLBSkp2U7E/view?usp=sharing',
        techs: [
            <div className='tooltip'>
                <img src='javascript-logo-svgrepo-com.png' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5-01-svgrepo-com.png' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css3-02-svgrepo-com.png' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>,
            <div className='tooltip'>
                <img src='pythonBlue.png' alt='Python3' />
                <span className='tipText'>Python3</span>
            </div>,
            <div className='tooltip'>
                <img src='djangoBlue.png' alt='Django' />
                <span className='tipText'>Django</span>
            </div>,
            <div className='tooltip'>
                <img src='postgresBlue.png' alt='postgreSQL' />
                <span className='tipText'>PostgreSQL</span>
            </div>,
            <div className='tooltip'>
                <img src='react-svgrepo-com.png' alt='React' />
                <span className='tipText'>React</span>
            </div>,
            <div className='tooltip'>
                <img src='node-js-svgrepo-com.png' alt='Node JS' />
                <span className='tipText'>Node.js</span>
            </div>
        ]
    },
    {
        title: 'Visit Seattle',
        img: 'p3screenshot.png',
        desc: "A full stack, single-page application to help Seattle's visitors filter restaurants, activities, and lodging by location and other attributes. An administrator's panel allows full front-end CRUD for the database. A collaborative effort with a group of wonderful folks.",
        github: 'https://github.com/rhysrfrazier/Visit_Seattle',
        app: '',
        demo: '',
        techs: [
            <div className='tooltip'>
                <img src='javascript-logo-svgrepo-com.png' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5-01-svgrepo-com.png' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css3-02-svgrepo-com.png' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>,
            <div className='tooltip'>
                <img src='mongodb-svgrepo-com.png' alt='MongoDB' />
                <span className='tipText'>MongoDB</span>
            </div>,
            <div className='tooltip'>
                <img src='bluemongoose.png' alt='Mongoose' className='mongoose' />
                <span className='tipText'>Mongoose</span>
            </div>,
            <div className='tooltip'>
                <img src='blueexpress.png' alt='express' />
                <span className='tipText'>Express</span>
            </div>,
            <div className='tooltip'>
                <img src='react-svgrepo-com.png' alt='React' />
                <span className='tipText'>React</span>
            </div>,
            <div className='tooltip'>
                <img src='node-js-svgrepo-com.png' alt='Node JS' />
                <span className='tipText'>Node.js</span>
            </div>
        ]
    },
    {
        title: 'Personal Library Manager',
        img: 'p2screenshot.png',
        desc: "A fullstack application for personal library management. In its current state it's good for sorting through different categories and updating the database when the user reads a new book.",
        github: 'https://github.com/rhysrfrazier/PersonalLibrary',
        app: '',
        demo: 'https://drive.google.com/file/d/1OgI3lM5diENGOzimUn5YB2AlpK0UrBeu/view?usp=sharing',
        techs: [
            <div className='tooltip'>
                <img src='javascript-logo-svgrepo-com.png' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5-01-svgrepo-com.png' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css3-02-svgrepo-com.png' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>,
            <div className='tooltip'>
                <img src='mongodb-svgrepo-com.png' alt='MongoDB' />
                <span className='tipText'>MongoDB</span>
            </div>,
            <div className='tooltip'>
                <img src='bluemongoose.png' alt='Mongoose' className='mongoose' />
                <span className='tipText'>Mongoose</span>
            </div>,
            <div className='tooltip'>
                <img src='blueexpress.png' alt='express' />
                <span className='tipText'>Express</span>
            </div>,
            <div className='tooltip'>
                <img src='node-js-svgrepo-com.png' alt='Node JS' />
                <span className='tipText'>Node.js</span>
            </div>
        ]
    },
    {
        title: 'Safe Restrooms 3rd-Party API',
        img: 'p1screenshot.png',
        desc: "A 3rd-party API interface that returns addresses of public restrooms safe for use by trans/GNC folx. Results include whether the restroom is accessible by persons with disabilities, whether unisex restrooms are available, and whether baby changing stations are available.",
        github: 'https://github.com/rhysrfrazier/safe-restroom-3rd-party-api',
        app: 'https://gotta_go.surge.sh/',
        demo: '',
        techs: [
            <div className='tooltip'>
                <img src='javascript-logo-svgrepo-com.png' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5-01-svgrepo-com.png' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css3-02-svgrepo-com.png' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>
        ]
    }
]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(null)

    function onClose() {
        setSelectedProject(null)
    }


    return (
        <div className='projects'>
            <div className='projectsContainer'>
                <h1 className='allProjH1'>Check out some of my demo projects and works in progress:</h1>
                <div className='projectTiles'>
                    {projects.map((project) => (
                        <div className='projectDetails' key={project.title} >
                            <div className='left'>
                                <h2>{project.title}</h2>
                                <p>{project.desc}</p>
                                <div className='techstack' >
                                    {project.techs.map((tech) =>
                                        (tech)
                                    )}
                                </div>
                                <div className='projectLinks'>
                                    <a href={project.github} target='_blank'>GitHub</a>
                                    {project.app !== '' ? <a href={project.app} target='_blank'>App</a> : null}
                                    {project.demo !== '' ? <a href={project.demo} target='_blank'>Demo</a> : null}
                                </div>
                            </div>
                            <div className='right'>
                                <img className='detailimg' src={project.img} alt='screenshot of app homepage' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}