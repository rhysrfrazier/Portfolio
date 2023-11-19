import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'

export default function Main(){
    return(
        <div className='routesContainer'>
            <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/resume' element={<Resume/>} />
            </Routes>
        </div>
    )
}