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
      {/* need to redo the skills and resume section because it gets in the way of the about as it is */}
      {/* need to redo the formatting of projects - full thing without modals because fuck me ig */}
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
