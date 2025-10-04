import { memo } from 'react'
import ChatButton from '../components/ChatButton'
import Header from '@/components/Header'
import Skills from '@/components/home/Skills'
import Connect from '@/components/home/Connect'
import Experience from '@/components/home/Experience'
import Projects from '@/components/home/Projects'
import Feedback from '@/components/home/Feedback'
import GlobalPresence from '@/components/home/GlobalPresence'
import Achievements from '@/components/home/Achievements'
import TechStack from '@/components/home/TechStack'

// Memoize components to prevent unnecessary re-renders during theme change
const MemoizedHeader = memo(Header)
const MemoizedSkills = memo(Skills)
const MemoizedConnect = memo(Connect)
const MemoizedExperience = memo(Experience)
const MemoizedTechStack = memo(TechStack)
const MemoizedProjects = memo(Projects)
const MemoizedAchievements = memo(Achievements)
const MemoizedFeedback = memo(Feedback)
const MemoizedGlobalPresence = memo(GlobalPresence)

function HomePage({ headerRef, chatButtonRef }) {
    return (
        <div>
            <div ref={headerRef}>
                <MemoizedHeader />
            </div>

            <div className="mt-20 lg:mx-56 md:mx-8 mx-2 px-4 ">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
                    <div>
                        <MemoizedSkills />
                    </div>
                    <div>
                        <MemoizedConnect />
                    </div>
                </div>
            </div>

            <MemoizedExperience />
            <MemoizedTechStack />

            <div className='lg:mx-56 md:mx-8 mx-2 px-4'>
                <MemoizedProjects />
            </div>

            <div className='lg:mx-40 md:mx-6 mx-2 px-4'>
                <MemoizedAchievements />
            </div>
            {/* <MemoizedFeedback /> */}
            <MemoizedGlobalPresence />

            {/* <ChatButton openFromHeaderRef={chatButtonRef} /> */}
        </div>
    )
}

export default HomePage;