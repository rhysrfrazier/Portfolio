import './App.css'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import { useState, useEffect, useRef } from 'react'


function App() {


  const observer = useRef()
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      console.log(entries)
      if (visibleSection) {
        setSelectedItem(visibleSection.id);
      }
    },
    {threshold: .2}
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      observer.current.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };

  }, [])

  return (
    <div className='app'>
      <Nav selectedItem={selectedItem} />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
