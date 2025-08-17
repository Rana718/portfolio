import ChatButton from '../components/ChatButton'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Connect from '../components/Connect'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

function HomePage({ headerRef, chatButtonRef }) {
    return (
        <div>
            <div ref={headerRef}>
                <Header />
            </div>

            <div className="mt-20">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
                    <div>
                        <Skills />
                    </div>
                    <div>
                        <Connect />
                    </div>
                </div>
            </div>

            <div>
                <Experience />
            </div>

            <div>
                <Projects />
            </div>

            {/* <ChatButton openFromHeaderRef={chatButtonRef} /> */}
        </div>
    )
}

export default HomePage;