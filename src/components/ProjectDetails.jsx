export default function ProjectDetails({ onClose, selectedProject }) {

    console.log(selectedProject.title)
    return (
        <div className='details'>
            <div className='detailModal'>
                <button onClick={onClose}>
                    <i area-hidden='true' className='fa-solid fa-x'></i>
                    <span class='fa-sr-only'>close</span>
                </button>
                <div className='left'>
                    <h1>{selectedProject.title}</h1>
                    <p1>{selectedProject.desc}</p1>
                    <div className='techstack' >
                        {selectedProject.techs.map((tech) => 
                            (tech)
                        )}
                    </div>
                    <div className='projectLinks'>
                        <a href={selectedProject.github}>Github</a>
                        {selectedProject.app !== '' ? <a href={selectedProject.app}>App</a> : null}
                    </div>
                </div>
                <div className='right'>
                    <img src={selectedProject.img} alt='screenshot of app homepage'/>
                </div>
            </div>
        </div>
    )
}