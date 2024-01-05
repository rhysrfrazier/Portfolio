export default function ProjectDetails({ onClose, selectedProject }) {

    console.log(selectedProject.title)
    return (
        <div className='details'>
            <div className='detailModal'>
                <button onClick={onClose} className='close'>
                    <i area-hidden='true' className='fa-solid fa-x fa-2xl'></i>
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
                        <a href={selectedProject.github} target='_blank'>GitHub</a>
                        {selectedProject.app !== '' ? <a href={selectedProject.app} target='_blank'>App</a> : null}
                        {selectedProject.demo !== '' ? <a href={selectedProject.demo} target='_blank'>Demo</a> : null}
                    </div>
                </div>
                <div className='right'>
                    <img className='detailimg' src={selectedProject.img} alt='screenshot of app homepage'/>
                </div>
            </div>
        </div>
    )
}