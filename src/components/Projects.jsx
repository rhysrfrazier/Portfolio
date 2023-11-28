import { useState } from "react"
import ProjectDetails from "./ProjectDetails"

const projects = [
    {
        title: 'Safe Restrooms 3rd-Party API',
        img: 'p1screenshot.png',
        desc: "A 3rd-party API interface that returns addresses of public restrooms safe for use by trans/GNC folx. Results include whether the restroom is accessible by persons with disabilities, whether unisex restrooms are available, and whether baby changing stations are available. Each result card is also clickable, and brings the user to the location address in Google Maps. I spent a lot of time making sure everything worked well with a screen-reader, and while I'm pleased with how it turned for a first project, I'm looking forward to going back and giving it a full accessibility audit.",
        github: 'https://github.com/rhysrfrazier/safe-restroom-3rd-party-api',
        app: 'https://gotta_go.surge.sh/',
        techs: [
            <img src='javascript-logo-svgrepo-com.png' alt='Javascript'/>, <img src='html5-01-svgrepo-com.png' alt='HTML5' />, <img src='css3-02-svgrepo-com.png' alt='CSS3' />
        ]
    },
    {
        title: 'Personal Library',
        img: 'worm.png',
        desc: "A fullstack application for personal library management. In it's current state it's good for sorting through different categories and updating the database when the user reads a new book, but I have so much more that I want it to do - including full CRUD on the front end, a fully remote database for ease of access, and the ability to generate suggestions for which book to read next based on user criteria. The silly little worm is the app mascot, Wilbur.",
        github: 'https://github.com/rhysrfrazier/PersonalLibrary',
        app: '',
        techs: [<img src='javascript-logo-svgrepo-com.png' alt='Javascript'/>, <img src='html5-01-svgrepo-com.png' alt='HTML5' />, <img src='css3-02-svgrepo-com.png' alt='CSS3' />, <img src='mongodb-svgrepo-com.png' alt='MongoDB' />, <img src='bluemongoose.png' alt='Mongoose' className='mongoose'/>, <img src='blueexpress.png' alt='express' />, <img src='node-js-svgrepo-com.png' alt='Node JS' />]
    },
    {
        title: 'Visit Seattle',
        img: 'p3screenshot.png',
        desc: "A full stack, single-page application to help Seattle's visitors find restaurants, activities, and lodging. A collaborative effort with a group of wonderful folks.",
        github: 'https://github.com/rhysrfrazier/Visit_Seattle',
        app: '',
        techs: [<img src='javascript-logo-svgrepo-com.png' alt='Javascript'/>, <img src='html5-01-svgrepo-com.png' alt='HTML5' />, <img src='css3-02-svgrepo-com.png' alt='CSS3' />, <img src='mongodb-svgrepo-com.png' alt='MongoDB' />, <img src='bluemongoose.png' alt='Mongoose' className='mongoose' />, <img src='blueexpress.png' alt='express' />, <img src='react-svgrepo-com.png' alt='React' />, <img src='node-js-svgrepo-com.png' alt='Node JS' /> ]
    },
]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(null)

    function showDetails(project) {
        setSelectedProject(project)
    }

    function onClose() {
        setSelectedProject(null)
    }

    return (
        <div className='projects'>
            <div className='projectsContainer'>
                <p>Here are some of my favorite projects so far. Click for more details, and come by again later for more updates!</p>
                {projects.map((project) => (
                    <div className='projectLite' key={project.title} onClick={() => showDetails(project)}>
                        <h1>{project.title}</h1>
                        <img alt="screenshot of the app's front page" src={project.img} />
                    </div>
                ))}
            </div>
            {selectedProject ? <ProjectDetails selectedProject={selectedProject} onClose={onClose} /> : null}
        </div>
    )
}