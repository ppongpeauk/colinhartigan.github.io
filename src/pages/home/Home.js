import react, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin } from '@mdi/js';

import me from '../../assets/me.png';
import namebg from '../../assets/namebg.png'
import background from '../../assets/background.png'

import EducationItem from './components/EducationItem';

function Home(props) {

    const iconSize = 30;

    const schools = [
        {
            "name": "JHU applied physics lab",
            "website": "https://secwww.jhuapl.edu/stem/stem-academy/",
            "dates": "2018 - 2022",
            "accent": "#68ACE5",
            "remarks": "hands-on extracurricular courses led by industry professionals"
        },
        {
            "name": "marriotts ridge high school",
            "website": "https://mrhs.hcpss.org/",
            "dates": "2018 - 2022",
            "accent": "#170080",
            "remarks": "curriculum focus in STEM"
        },
        {
            "name": "georgia institute of technology",
            "website": "https://www.gatech.edu/",
            "dates": "2022 - 2026",
            "accent": "#B3A369",
            "remarks": "BS in computer engineering",
            "last": true,
        },
    ]

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <>
            <div className="w-[80%] h-auto max-w-screen-2xl mx-auto">
                <div className="h-screen mx-auto flex flex-col items-center justify-center">

                    <div className="absolute w-auto h-auto flex flex-col items-center justify-center">
                        <div className="p-2 flex flex-col align-center justify-center ">
                            <div className="border-2 border-black p-3 overflow-hidden" >
                                <p className="text-5xl font-medium h-full bg-clip-text text-transparent text-left" style={{ backgroundImage: `url(${namebg})`, }}>
                                    COLIN HARTIGAN
                                </p>
                            </div>
                            <div className="flex flex-row align-center justify-center">
                                <p className="text-2xl border-2 border-black border-t-0 py-2 px-4 font-medium text-center">
                                    MD 🡢 ATL
                                </p>
                                <p className="text-2xl border-2 border-black border-l-0 border-t-0 py-2 px-4 font-medium text-center">
                                    <span className="text-[#B3A369]">GT</span> ECE 2026
                                </p>
                                <p className="text-2xl border-2 grow bg-black border-black border-l-0 border-t-0 py-2 px-4 font-medium text-center">

                                </p>
                            </div>
                        </div>

                        {/* socials */}
                        <div className="flex flex-row align-center justify-center space-x-4 mt-2">
                            <a href="https://github.com/colinhartigan" target="_blank" rel="noreferrer">
                                <Icon path={mdiGithub} title="GitHub - colinhartigan" color="black" width={iconSize} height={iconSize} />
                            </a>
                            <a href="https://www.linkedin.com/in/colin-hartigan/" target="_blank" rel="noreferrer" >
                                <Icon path={mdiLinkedin} title="LinkedIn - Colin Hartigan" color="black" width={iconSize} height={iconSize} />
                            </a>
                        </div>
                    </div>


                    {/* <div className="h-[25vh] mt-[70vh]">
                        <div className="w-full h-auto flex flex-row items-center justify-center gap-6">
                            <Link to="/about" className="w-32 h-auto border-2 border-black p-2 text-center text-lg">
                                about me
                            </Link>
                            <Link to="/career" className="w-32 h-auto border-2 border-black p-2 text-center text-lg">
                                career
                            </Link>
                            <Link to="/projects" className="w-32 h-auto border-2 border-black p-2 text-center text-lg">
                                projects
                            </Link>
                        </div>
                    </div> */}

                    {/* delete this after ece 1100 */}
                    {/* <div className="h-[25vh] mt-[65vh]">
                        <div className="w-auto max-w-3xl h-auto flex flex-col items-center justify-center border-2 border-b-0 border-black">
                            <div className="p-3">
                                <p className="text-2xl text-left">
                                    Learn about me, my career, and my projects.
                                </p>
                            </div>
                            <div className="w-full h-auto grid grid-cols-3">
                                <Link to="/about" className="w-auto h-auto col-span-1 border-2 border-l-0 border-black p-3 text-center text-lg">
                                    about me
                                </Link>
                                <Link to="/career" className="w-auto h-auto col-span-1 border-2 border-l-0 border-black p-3 text-center text-lg">
                                    career
                                </Link>
                                <Link to="/projects" className="w-auto h-auto col-span-1 border-2 border-x-0 border-black p-3 text-center text-lg">
                                    projects
                                </Link>
                            </div>
                        </div>
                    </div> */}

                </div>

                {/* <div className="xl:h-screen h-[200vh] w-full mx-auto xl pb-7 pt-20 flex flex-col items-start justify-start">

                    <div className="relative h-full xl:h-[50%]">
                        <div className="relative flex flex-col items-start h-auto z-10 pl-8">
                            <div className="w-min border-2 border-b-0 border-black p-2 overflow-hidden bg-white">
                                <p className="text-5xl h-full">
                                    HELLO
                                </p>
                            </div>
                            <div className="w-8/12 text-2xl border-2 border-black p-2 bg-white">
                                <span className="text-left h-full text-2xl">
                                    My name is Colin, and I am a computer engineering student from Maryland. I'm an avid programmer and tinkerer.
                                </span>
                                <span className="text-lect h-auto ml-2 text-2xl underline">
                                    <a href="/#/about">read more</a>
                                </span>
                            </div>
                        </div>
                        <div className="absolute top-0 pt-8 w-auto h-full z-0">
                            <img className="h-full w-auto object-contain z-0" src={me} alt="thing" />
                        </div>
                    </div>

                    <div className="relative h-full xl:h-[50%] w-full">
                        <div className="relative flex flex-col items-end h-auto z-10 pr-8">
                            <div className="w-min border-2 border-b-0 border-black p-2 overflow-hidden bg-white">
                                <p className="text-5xl h-full">
                                    EDUCATION
                                </p>
                            </div>
                            <div className="max-w-full xl:max-w-10/12 text-2xl border-x-2 xl:border-x-0 xl:border-y-2 border-black bg-white">

                                <div className="flex flex-col xl:flex-row justify-start align-center">

                                    {schools.map((element, index) => {
                                        return <EducationItem data={element} key={index} />
                                    })}

                                </div>

                            </div>

                        </div>
                        <div className="absolute top-0 right-0 pt-8 w-auto h-full z-0">
                            <img className="h-full w-auto object-contain z-0" src="https://www.exploregeorgia.org/sites/default/files/legacy_images/TechTowerSign.jpg" alt="thing" />
                        </div>
                    </div>
                </div> */}

                {/* <div className="h-screen mx-auto pb-7 pt-20 flex flex-col items-center justify-center">
                    <p className="text-2xl">
                        discover more
                    </p>
                    <div className="w-full h-auto mt-6 flex flex-row items-center justify-center gap-6">
                        <Link to="/experience" className="w-32 h-auto border-2 border-black p-2 text-center text-lg">
                            experience
                        </Link>
                        <Link to="/projects" className="w-32 h-auto border-2 border-black p-2 text-center text-lg">
                            projects
                        </Link>
                    </div>
                </div> */}
            </div>
        </>

    )
}

export default Home;