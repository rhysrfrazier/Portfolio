import { useState } from "react"

const projects = [
    {
        title: "Next.JS Demo Site",
        img: 'acmeProj.png',
        desc: "A demo invoice dashboard made while learning to use Next.JS and getting more exposure to Typescript and Tailwind. In the current iteration you can perform full CRUD operations on the invoices and view and search users. Sign in with user@nextmail.com and the password 123456 to test it out, or check out the GitHUb repo for more info!",
        github: 'https://github.com/rhysrfrazier/nextjstutorial',
        app: 'https://nextjs-demo-delta-roan.vercel.app/',
        demo: '',
        techs: [
            <div className='tooltip'>
                <img src='typescript.svg' alt='Typescript'/>
                <span className='tipText' >Typescript</span>
            </div>,
            <div className='tooltip'>
                <img src='tailwind-svgrepo-com.svg' alt='Tailwind' />
                <span className='tipText'>Tailwind</span>
            </div>,
            <div className='tooltip'>
                <img src='nextjs-white.svg' alt='Next.js' />
                <span className='tipText'>Next.js</span>
            </div>,
            <div className='tooltip'>
                <img src='psql.svg' alt='postgreSQL' />
                <span className='tipText'>PostgreSQL</span>
            </div>,
            <div className='tooltip'>
                <img src='nodejs.svg' alt='Node JS' />
                <span className='tipText'>Node.js</span>
            </div>
        ]
    },
    {
        title: 'Pac(ker)Man',
        img: 'p4Screen.png',
        desc: "Pac(ker)Man is a light-weight inventory management system to help keep track of supply locations and states of repair through database SQL manipulation when packing and unpacking. The current iteration allows user to pack and unpack items based on a single, user-generated event to be attended.",
        github: 'https://github.com/rhysrfrazier/packerman',
        app: '',
        demo: 'https://drive.google.com/file/d/1URXGJqfsa5ETjuN_e1XLM0NLBSkp2U7E/view?usp=sharing',
        techs: [
            <div className='tooltip'>
                <img src='javascript.svg' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5.svg' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css.svg' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>,
            <div className='tooltip'>
                <img src='python.svg' alt='Python3' />
                <span className='tipText'>Python3</span>
            </div>,
            <div className='tooltip'>
                <img src='django.svg' alt='Django' />
                <span className='tipText'>Django</span>
            </div>,
            <div className='tooltip'>
                <img src='psql.svg' alt='postgreSQL' />
                <span className='tipText'>PostgreSQL</span>
            </div>,
            <div className='tooltip'>
                <img src='react.svg' alt='React' />
                <span className='tipText'>React</span>
            </div>,
            <div className='tooltip'>
                <img src='nodejs.svg' alt='Node JS' />
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
                <img src='javascript.svg' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5.svg' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css.svg' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>,
            <div className='tooltip'>
                <img src='mongodb.svg' alt='MongoDB' />
                <span className='tipText'>MongoDB</span>
            </div>,
            <div className='tooltip'>
                <img src='mongoose.png' alt='Mongoose' className='mongoose' />
                <span className='tipText'>Mongoose</span>
            </div>,
            <div className='tooltip'>
                <img src='whiteexpress.svg' alt='express' />
                <span className='tipText'>Express</span>
            </div>,
            <div className='tooltip'>
                <img src='react.svg' alt='React' />
                <span className='tipText'>React</span>
            </div>,
            <div className='tooltip'>
                <img src='nodejs.svg' alt='Node JS' />
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
                <img src='javascript.svg' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5.svg' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css.svg' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>,
            <div className='tooltip'>
                <img src='mongodb.svg' alt='MongoDB' />
                <span className='tipText'>MongoDB</span>
            </div>,
            <div className='tooltip'>
                <img src='mongoose.png' alt='Mongoose' className='mongoose' />
                <span className='tipText'>Mongoose</span>
            </div>,
            <div className='tooltip'>
                <img src='whiteexpress.svg' alt='express' />
                <span className='tipText'>Express</span>
            </div>,
            <div className='tooltip'>
                <img src='react.svg' alt='React' />
                <span className='tipText'>React</span>
            </div>,
            <div className='tooltip'>
                <img src='nodejs.svg' alt='Node JS' />
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
                <img src='javascript.svg' alt='Javascript' />
                <span className='tipText'>JavaScript</span>
            </div>,
            <div className='tooltip'>
                <img src='html5.svg' alt='HTML5' />
                <span className='tipText'>HTML5</span>
            </div>,
            <div className='tooltip'>
                <img src='css.svg' alt='CSS3' />
                <span className='tipText'>CSS3</span>
            </div>
        ]
    }
]

export default function Projects() {
    return (
        <div className='projectsContainer' id='projects' data-section>
            <h1>Check out some of my demo projects and works in progress:</h1>
            <div className='projectTiles'>
                {projects.map((project) => (
                    <div className='projectDetails' key={project.title} >
                        <div className='left'>
                            <h2 className='oneProjTitle'>{project.title}</h2>
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
    )
}