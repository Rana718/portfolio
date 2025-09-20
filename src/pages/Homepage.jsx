import ChatButton from '../components/ChatButton'
import Header from '@/components/Header'
import Skills from '@/components/home/Skills'
import Connect from '@/components/home/Connect'
import Experience from '@/components/home/Experience'
import Projects from '@/components/home/Projects'

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