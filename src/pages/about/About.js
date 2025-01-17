import { useEffect } from "react"

import bg from "../../assets/background.png"
import skyline from "../../assets/skyline.jpg"

function About(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    const dialogs = [
        {
            name: "hi there!",
            text: "Hello! My name is Colin, and I am a first-year computer engineering student at Georgia Tech. I am fascinated by the intersections of hardware and software, so I am concentrating my studies in computing hardware & emerging architectures and devices."
        },
        {
            name: "where are you from?",
            text: "I was born in Connecticut, but have spent most of my life living in Maryland. Now, I'm attending school in Atlanta, Georgia. I am fascinated by urbanism and the built environment, so living in Atlanta, a city that is rapidly growing and changing, has been super exciting and a completely different vibe than anything I've experienced before.",
        },
        {
            name: "why computer engineering?",
            text: "I have a neverending curiosity to know how everything works. As I have aged and learned, this need as been stadily satiated, especially when I discovered my passion for programming. Teaching myself to code and create things has been an instrumental part in narrowing my interests for school and my career. Ultimately, technology is super cool and I want to be at the cutting edge of its development.",
        },
        {
            name: "got any hobbies?",
            text: "I spend a lot of time working on personal projects, whether it be programming, tinkering with hardware, or trying to figure out how CAD works. I also play a lot of video games and am a huge music nerd. I play viola, and I am a huge fan of EDM artists like Porter Robinson and Madeon and indie artists. ",
        },
    ]

    // for getting classes from OSCAR: https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202202&subj_code_in={item.dept}&crse_numb_in={item.num}
    // term_id = [year][sem] -> sem = 02 = spring, 08 = fall
    const courses = [
        {
            dept: "MATH",
            num: "1554",
            year: "fall 2022",
            title: "Linear Algebra",
            desc: "Linear algebra eigenvalues, eigenvectors, applications to linear systems, least squares, diagnolization, quadratic forms."
        },
        {
            dept: "ECE",
            num: "2020",
            year: "fall 2022",
            title: "Digital System Design",
            desc: "Computer system and digital design principles. Switch and gate design, Boolean algebra, number systems, arithmetic, storage elements. Datapath, memory organization, instruction set architecture, assembly language."
        },
        {
            dept: "CS",
            num: "1301",
            year: "",
            title: "Introduction to Computing",
            desc: "Introduction to computing principles and programming practices with an emphasis on the design, construction and implementation of problem solutions use of software tools."
        },
        {
            dept: "MATH",
            num: "1552",
            year: "",
            title: "Integral Calculus",
            desc: "Definite and indefinite integrals, techniques of integration, improper integrals, infinite series, applications. "
        },
        {
            dept: "MATH",
            num: "1551",
            year: "",
            title: "Differential Calculus",
            desc: "Differential calculus including applications and the underlying theory of limits for functions and sequences."
        },
    ]

    const skills = [
        {
            name: "languages",
            data: [
                {
                    name: "python",
                    desc: "experience with flask, tensorflow, websockets",
                },
                {
                    name: "javascript",
                    desc: "experience with react, node, socket.io",
                },
                {
                    name: "HTML/CSS",
                    desc: "mostly in conjunction with React",
                },
                {
                    name: "lua",
                    desc: "ROBLOX's RBX.Lua",
                },
                {
                    name: "c++",
                    desc: "arduino",
                },
                {
                    name: "c",
                    desc: "basic c: memory management, pointers, etc.",
                }
            ],
        },
        {
            name: "software",
            data: [
                {
                    name: "visual studio code",
                    desc: "my go-to IDE"
                },
                {
                    name: "git/github",
                },
                {
                    name: "arduino IDE",
                },
                {
                    name: "fusion 360",
                    desc: "basic 3D modeling",
                },
                {
                    name: "microsoft office suite",
                },
                {
                    name: "google drive suite",
                }
            ],
        },
        {
            name: "hardware",
            data: [
                {
                    name: "raspberry pi",
                },
                {
                    name: "arduino",
                },
                {
                    name: "esp32",
                    desc: "micropython and c++",
                },
                {
                    name: "breadboard circuits",
                    desc: "basic electronics integrating ICs, basic circuit components"
                }
            ],
        }
    ]

    return (
        <div className="h-fit w-2xl max-w-7xl mx-auto flex flex-col items-start justify-start">
            <div className="w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8">

                {/* 
                    - brief introduction text w/ images 
                    - education (notable courses) 
                    - career goals
                    - skills
                */}

                <div className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center border-2 border-black">
                    <div className="absolute w-full h-full">
                        <img className="grayscale" src={bg} alt="thing" />
                    </div>

                    <div className="relative w-full h-auto flex flex-col items-start justify-start pb-12 ">
                        <div className="w-auto p-3 bg-white border-black border-r-2">
                            <p className="text-5xl">
                                Colin Hartigan
                            </p>
                        </div>
                        <div className="w-auto h-auto bg-white border-black border-2 border-l-0 flex lg:flex-row flex-col items-center justify-start">
                            <div className="h-full p-3">
                                <p className="text-2xl">
                                    tinkerer, programmer, music enjoyer, etc
                                </p>
                            </div>
                            {/* <div className="h-full p-3 border-black">
                                <p className="text-2xl">
                                    Computing Hardware & Emerging Architectures + Devices
                                </p>
                            </div> */}
                            {/* <div className="w-auto min-h-full flex grow bg-black" /> */}
                        </div>
                    </div>
                </div>

                {/* <div className="relative w-full h-auto flex flex-col items-start justify-start mt-6">
                    <p className="text-2xl">
                        table of contents
                    </p>
                </div> */}



                <div className="w-full h-auto flex flex-col overflow-hidden items-start justify-center mt-12">
                    <div className="w-full h-auto mb-4">
                        <p className="text-4xl">
                            education
                        </p>
                        <div className="w-full h-[2px] bg-black mt-2" />
                    </div>

                    {/* header */}
                    <div className="relative lg:w-1/2 w-full h-auto border-black border-2">
                        <div className="relative w-full h-auto overflow-hidden">
                            <div className="absolute w-full h-full">
                                <img className="w-full object-none lg:object-left-bottom grayscale" src={skyline} alt="thing" />
                            </div>
                            <div className="relative w-full h-auto flex flex-col items-start justify-start pb-12">
                                <div className="w-auto h-auto p-3 border-black border-r-2 border-b-2 bg-white">
                                    <p className="text-3xl">
                                        Georgia Institute of Technology
                                    </p>
                                </div>
                                <div className="w-auto h-auto bg-white border-black border-2 border-l-0 border-t-0 flex lg:flex-row flex-col items-center justify-start">
                                    <div className="h-full p-3">
                                        <p className="text-xl">
                                            Atlanta, GA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto flex flex-col p-3 justify-start items-start mt-4">
                        <div className="w-full grid grid-cols-3 gap-0">
                            <p className="grow text-2xl text-center font-semibold">
                                expected graduation
                            </p>
                            <p className="grow text-2xl text-center font-semibold">
                                major
                            </p>
                            <p className="grow text-2xl text-center font-semibold">
                                threads (concentration)
                            </p>
                        </div>
                        <div className="w-full grid grid-cols-3 gap-0 mt-2">
                            <p className="grow text-xl text-center">
                                spring 2026
                            </p>
                            <p className="grow text-xl text-center">
                                computer engineering
                            </p>
                            <p className="grow text-xl text-center">
                                computing hardware and emerging architectures + devices
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-auto flex-col justify-start items-center mt-4">
                        <div className="w-auto h-auto flex flex-col">

                            <div className="w-full h-auto flex flex-row justify-start items-stretch">
                                <div className="w-auto h-auto flex flex-col items-start justify-start p-3 border-black border-2">
                                    <p className="text-3xl">
                                        notable coursework
                                    </p>
                                </div>
                                <div className="flex grow bg-black" />
                            </div>

                            {courses.map((course, index) => {
                                return (
                                    <div className="w-auto h-auto grid grid-cols-4 border-black border-2 border-t-0">
                                        <div className="w-auto h-auto col-span-1 flex flex-col items-start justify-start p-3 border-black border-r-2">
                                            <p className="text-2xl">
                                                {course.title}
                                            </p>
                                            <p className="text-lg italic">
                                                {course.year}
                                            </p>
                                        </div>
                                        <div className="w-auto h-auto col-span-3 flex flex-col items-start justify-start p-3">
                                            <p className="text-xl">
                                                {course.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                    {/* <div className="w-full h-auto flex-col justify-start items-center mt-4">
                        <div className="w-full h-auto flex-col justify-start items-start">
                            <p className="text-3xl">
                                the hive (coming soon)
                            </p>
                        </div>
                    </div> */}

                </div>



                <div className="w-full h-auto flex flex-col items-start justify-center mt-12">
                    <div className="w-full h-auto mb-4">
                        <p className="text-4xl">
                            skills
                        </p>
                        <div className="w-full h-[2px] bg-black mt-2" />
                    </div>

                    {/* 

                        software
                            - vscode
                            - git
                            - 

                        hardware
                            - arduino
                            - raspberry pi
                            - esp32
                    */}

                    <div className="w-full h-auto flex flex-col items-start justify-start mt-4">

                        <div className="w-full h-auto grid grid-cols-3 gap-12">

                            {skills.map((skill, index) => {
                                return (
                                    <div className="w-full h-auto flex flex-col items-start justify-start border-black border-2">
                                        <div className="w-full h-auto flex shrink flex-row items-stretch justify-start border-black border-b-2">
                                            <p className="text-3xl p-3">
                                                {skill.name}
                                            </p>
                                            <div className="flex grow bg-black" />
                                        </div>

                                        <div className="w-full h-auto grow flex flex-col items-start justify-start">
                                            {
                                                skill.data.map((item, index) => {
                                                    return (
                                                        <div className="w-full h-auto p-3 flex flex-col items-start justify-start">
                                                            <p className="text-2xl">
                                                                {item.name}
                                                            </p>
                                                            {item.desc !== undefined ?
                                                                <p className="text-xl ml-4 italic">
                                                                    {item.desc}
                                                                </p>
                                                                : null}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>



                <div className="w-full h-auto flex flex-col items-start justify-center mt-12">
                    <div className="w-full h-auto mb-4">
                        <p className="text-4xl">
                            bio
                        </p>
                        <div className="w-full h-[2px] bg-black mt-2" />
                    </div>
                    {dialogs.map((item, index) => {
                        return (
                            <div className={`w-full h-auto flex flex-col items-start justify-start ${index !== 0 ? 'mt-8' : ''}`}>
                                <div className="w-full h-auto flex flex-col justify-start items-start mb-1">
                                    <div className="">
                                        <p className="text-3xl">
                                            > {item.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-auto flex flex-col p-3 border-black border-2">
                                    <p className="text-xl">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>
        </div >
    )
}

export default About;