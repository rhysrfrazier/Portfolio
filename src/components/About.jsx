export default function About() {
    return (
        <div className='aboutSection'>
            <div className='pictures'>
                <div className='insidePics'>
                    <img className='aboutOne' alt="Rhys and Oliver the cat sitting together" src='me+ollie.jpg' />
                    <img className='aboutTwo' alt="A screenshot of some code from this site" src='code.png' />
                    <img className='aboutThree' alt="A stack of books" src='bookstack.jpg' />
                </div>
            </div>
            <div className='heyContainer'>
                <div className='heyThere'>
                    <h1>Hey There!</h1>
                    <p>My name's Rhys! I'm here, I'm queer, and I'm a junior engineer - with an interest in accessible design and an eye for nit-picky details. My MA is in English, but coding is more fun than copywriting, so I traded in Word for VSCode. Ask me about the similarities between writing a paper about Old Norse wisdom literature and coding a website from scratch!</p>

                    {/* <p>I like front and back end development equally well, and so far have split my skill points pretty evenly between the two. I have experience working with the following technologies:</p>

                    <div className='aboutTechs'>
                        <div className='aboutTechBlock'>
                            <p>JavaScript</p>
                            <img className='techIcon' src='javascript-logo-svgrepo-com.png' aria-hidden='true'></img>
                        </div>
                        <div className='aboutTechBlock'>
                            <p>HTML5</p>
                            <img className='techIcon' src='html5-01-svgrepo-com.png' aria-hidden='true'></img>
                        </div>
                    </div> */}
                    <p>The site is made with HTML5, CSS3, and JS in a React framework.</p>
                </div>
            </div>
        </div>
    )
}