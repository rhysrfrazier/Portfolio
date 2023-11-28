import { useState } from "react"
import ProjectDetails from "./ProjectDetails"

const projects = [
    {
        title: 'Safe Restrooms 3rd-Party API',
        img: 'p1screenshot.png',
        desc: 'A 3rd-party API interface that returns addresses of public restrooms safe for use by trans/GNC folx. Results include whether the restroom is accessible by persons with disabilities, whether unisex restrooms are available, and whether baby changing stations are available.',
        github: 'https://github.com/rhysrfrazier/safe-restroom-3rd-party-api',
        app: 'https://gotta_go.surge.sh/',
        techs: [
            <div><i aria-hidden="true" className="fa-brands fa-square-js"></i> <span className="fa-sr-only">JavaScript</span></div>, <div> <i aria-hidden="true" class="fa-brands fa-html5"></i> <span className="fa-sr-only">HTML5</span></div>, <div><i aria-hidden="true" className="fa-brands fa-css3-alt"></i> <span className="fa-sr-only">CSS3</span>
            </div>
        ]
    },
    {
        title: 'Personal Library',
        img: 'worm.png',
        desc: 'A fullstack application for personal library management.',
        github: 'https://github.com/rhysrfrazier/PersonalLibrary',
        app: '',
        techs: [<div><i aria-hidden="true" className="fa-brands fa-square-js"></i> <span className="fa-sr-only">JavaScript</span></div>, <div> <i aria-hidden="true" class="fa-brands fa-html5"></i> <span className="fa-sr-only">HTML5</span></div>, <div><i aria-hidden="true" className="fa-brands fa-css3-alt"></i> <span className="fa-sr-only">CSS3</span>
        </div>, <img src='mongodb-svgrepo-com.png' alt='MongoDB' />]
    },
    {
        title: 'Visit Seattle',
        img: 'p3screenshot.png',
        desc: "A full stack, single-page application to help Seattle's visitors find restaurants, activities, and lodging.",
        github: 'https://github.com/rhysrfrazier/Visit_Seattle',
        app: '',
        techs: [<div><i aria-hidden="true" className="fa-brands fa-square-js"></i> <span className="fa-sr-only">JavaScript</span></div>, <div> <i aria-hidden="true" class="fa-brands fa-html5"></i> <span className="fa-sr-only">HTML5</span></div>, <div><i aria-hidden="true" className="fa-brands fa-css3-alt"></i> <span className="fa-sr-only">CSS3</span>
        </div>, <img src='mongodb-svgrepo-com.png' alt='MongoDB' />, <div><i aria-hidden="true" class="fa-brands fa-react"></i> <span className="fa-sr-only">React</span>
        </div > ]
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
                <p>Some introductory text here</p>
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