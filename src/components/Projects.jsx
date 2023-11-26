const projects = [
    {
        title: 'Safe Restrooms 3rd-Party API',
        img: 'p1screenshot.png',
        desc: 'A 3rd-party API interface that returns addresses of public restrooms safe for use by trans/GNC folx. Results include whether the restroom is accessible by persons with disabilities, whether unisex restrooms are available, and whether baby changing stations are available.',
        github: 'https://github.com/rhysrfrazier/safe-restroom-3rd-party-api',
        app: 'https://gotta_go.surge.sh/',
        techs: ['<i aria-hidden="true" class="fa-brands fa-square-js"></i> <span-class="fa-sr-only">JavaScript</span>', '<i aria-hidden="true" class="fa-brands fa-html5"></i> <span-class="fa-sr-only">HTML5</span>', '<i aria-hidden="true" class="fa-brands fa-css3-alt"></i> <span-class="fa-sr-only">CSS3</span>']
    },
    {
        title: 'Personal Library',
        img: 'worm.png',
        desc: 'A fullstack application for personal library management.',
        github: 'https://github.com/rhysrfrazier/PersonalLibrary',
        app: '',
        techs: []
    },
    {
        title: 'Visit Seattle',
        img: 'p3screenshot.png',
        desc: "A full stack, single-page application to help Seattle's visitors find restaurants, activities, and lodging.",
        github: 'https://github.com/rhysrfrazier/Visit_Seattle',
        app: '',
        techs: []
    },
]

export default function Projects() {

    return (
        <div className='projects'>
            <div className='projectsContainer'>
            <p>Some introductory text here</p>
                { projects.map((project) => (
                    <div className='projectLite' key={project.title}>
                        <h1>{project.title}</h1>
                        <img alt="screenshot of the app's front page" src={project.img} />
                    </div>
                ))}

                {/* <div className='projectLite'>
                    <h1 className='projTitle'>Project Name</h1>
                    <img src='worm.png' alt='screenshot of front page of this project' />
                </div>
                <div className='projectLite'>
                    <h1 className='projTitle'>Project Name2</h1>
                    <img src='worm.png' alt='screenshot of front page of this project' />
                </div>
                <div className='projectLite'>
                    <h1 className='projTitle'>Project Name</h1>
                    <img src='worm.png' alt='screenshot of front page of this project' />
                </div> */}
            </div>
        </div>
    )
}