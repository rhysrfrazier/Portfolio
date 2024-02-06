import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'


function App() {


  return (
    <div className='app'>
      <Nav />
      <About />
      <Resume />
      <Projects />
      <Contact />
      {/*<Footer /> */}
    </div>
  )
}

export default App
