import ChatButton from '../components/ChatButton'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Connect from '../components/Connect'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

function HomePage({ headerRef, chatButtonRef }) {
    return (
        <div className="page-content no-scroll-snap">
            <div ref={headerRef} className="no-scroll-snap">
                <Header />
            </div>

            <div className="mt-20 no-scroll-snap">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0 no-scroll-snap">
                    <div className="no-scroll-snap">
                        <Skills />
                    </div>
                    <div className="no-scroll-snap">
                        <Connect />
                    </div>
                </div>
            </div>

            <div className="no-scroll-snap">
                <Experience />
            </div>
            
            <div className="no-scroll-snap">
                <Projects />
            </div>
            
            {/* <ChatButton openFromHeaderRef={chatButtonRef} /> */}
        </div>
    )
}

export default HomePage;
