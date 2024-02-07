export default function About() {
    return (
        <div className='aboutSection' id='about'>
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
                    <p>My name's Rhys! I'm here, I'm queer, and I'm a software engineer. My MA is in English, but coding is more fun than copywriting, so I traded in Word for VSCode. Ask me about the similarities between writing a paper about Old Norse wisdom literature and coding a website from scratch!</p>
                    <div className='likesnDislikes'>
                        <ul className='likes'>
                            <p>Likes:</p>
                            <li>Helping folks</li>
                            <li>Accessible technology</li>
                            <li>Learning new things</li>
                            <li>Robust, well-written docs</li>
                            <li>Winning whack-a-mole with buggy code</li>
                            <li>Writing</li>
                            <li>Coding - of course!</li>
                        </ul>
                        <ul className='dislikes'>
                            <p>Dislikes:</p>
                            <li>When folks are rude to service workers</li>
                            <li>Unclear expectations</li>
                            <li>Oatmeal</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}