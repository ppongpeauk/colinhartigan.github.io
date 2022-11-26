import { useEffect, useRef, useState } from 'react'
import FullScreenPreview from '../../components/FullScreenPreview';

import textScrollVideo from '../../assets/ece1100/textScroll.mp4';
import pixelArt from '../../assets/ece1100/pixelArt.png';
import multiScrollTear from '../../assets/ece1100/multiScrollTear.mp4';
import multiScrollFixed from '../../assets/ece1100/multiScrollFixed.mp4';
import stockExperiment from '../../assets/ece1100/stockExperiment.mp4';
import flashTest from '../../assets/ece1100/flashTest.mp4';
import sunnyEarly from '../../assets/ece1100/sunnyEarly.png'

function Media(props) {

    const src = props.src;
    const isImage = props.isImage !== undefined ? props.isImage : false;
    const alt = props.alt !== undefined ? props.alt : "media";
    const desc = props.desc

    const previewCallback = props.openPreview

    const vidRef = useRef(null)
    const [showPlayText, setShowPlayText] = useState(true)

    function playV() {
        !vidRef.current.paused ? vidRef.current.pause() : vidRef.current.play()
        setShowPlayText(!showPlayText)
    }

    function openPreview() {
        previewCallback(src, desc)
    }

    useEffect(() => {
        if (vidRef.current !== null) {
            vidRef.current.addEventListener('play', () => {
                setShowPlayText(false)
            })
            vidRef.current.addEventListener('pause', () => {
                setShowPlayText(true)
            })
        }
    }, [])

    return (
        <div className="w-72 h-auto flex flex-col items-start justify-start border-black border-2">
            <div className="relative w-full h-auto flex flex-col items-start justify-start">
                {!isImage && showPlayText ? <div className="absolute w-full h-full flex flex-col items-center justify-center bg-black/50">
                    <p className="text-md w-auto h-auto text-white">
                        click to play
                    </p>
                </div> : null}
                {isImage ? <img className={previewCallback !== undefined ? "cursor-pointer" : ""} src={src} alt={alt} onClick={openPreview} /> : <video ref={vidRef} muted onClick={playV} width="100%" height="100%" src={src} />}
            </div>
            <p className="w-full text-md italic p-2">
                {desc}
            </p>
        </div>
    )
}

function ECEproject(props) {

    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState(null)
    const [previewDescription, setPreviewDescription] = useState(null)

    const conditions = [
        {
            name: "clear",
            day: undefined,
            night: undefined,
        }
    ]

    function setPreview(src, desc) {
        setPreviewImage(src)
        setPreviewDescription(desc)
        setPreviewOpen(true)
    }

    return (
        <>
            <FullScreenPreview img={previewImage} desc={previewDescription} open={previewOpen} close={() => { setPreviewOpen(false) }} />
            <div className="h-fit w-2xl max-w-7xl mx-auto flex flex-col items-start justify-start">
                <div className="w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8">

                    <div className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center border-2 border-black">
                        <div className="absolute w-full h-full">
                            <img className="grayscale" src={null} alt="thing" />
                        </div>

                        <div className="relative w-full h-auto flex flex-col items-start justify-start pb-12 ">
                            <div className="w-auto p-3 bg-white border-black border-r-2">
                                <p className="text-5xl">
                                    weathermat
                                </p>
                            </div>
                            <div className="w-auto h-auto bg-white border-black border-2 border-l-0 flex lg:flex-row flex-col items-center justify-start">
                                <div className="h-full p-3">
                                    <p className="text-2xl">
                                        a dynamic live weather display
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto mt-6">
                        <div className="w-full h-auto flex flex-col items-start justify-start">
                            <p className="text-xl italic">
                                I have a fascination and appreciation for individually addressable LEDs. The flexibility, customization, and ease of use they provide make them a great tool for any maker. Without a concrete plan for this project, but knowing I wanted to do something with LEDs, I bought a 16x16 matrix of WS2812b addressable LEDs and an ESP32 to drive them.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-auto mt-6">

                        <div className="w-full h-auto mb-4">
                            <p className="text-4xl">
                                conceptualization & theorycrafting
                            </p>
                            <div className="w-full h-[2px] bg-black mt-2" />
                        </div>

                        {/* <div className="w-full h-auto flex flex-row items-start justify-start my-4">
                        images
                    </div> */}

                        <div className="w-full h-auto flex flex-row items-start justify-center mt-4">
                            <div className="w-auto h-auto flex flex-col items-start justify-start">
                                <p className="text-xl">
                                    After experimenting with the ESP32 and LED matrix, I wrote a custom library to simplify certain tasks like drawing text and rendering everything onto the display at a constant framerate. Maintaining a constant framerate proved difficult and resulted in hours of experimentation with asynchronous tasks and multithreading, but ultimately, I devised a synchronous solution which surprisngly works well.
                                </p>
                            </div>
                            <div className="w-full h-auto flex flex-row items-stretch justify-center gap-3">
                                <Media src={textScrollVideo} desc="text scrolling experiment for font rendering and framerate performance" />
                                <Media src={pixelArt} isImage desc="pixel art rendering experiment (minecraft pumpkin)" openPreview={setPreview} />

                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto mt-6">

                        <div className="w-full h-auto mb-4">
                            <p className="text-4xl">
                                initial design & early troubleshooting
                            </p>
                            <div className="w-full h-[2px] bg-black mt-2" />
                        </div>

                        <div className="w-full h-auto flex flex-row items-start justify-center mt-4">
                            <div className="w-auto h-auto flex flex-col items-start justify-start">
                                <p className="text-xl">
                                    Executing simple tasks like writing some text to the display or mapping an image to pixel art were trivial, but as I expanded the functionality and started taking advantage of the computing power of the ESP32, some challenges emerged.
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col items-start justify-start border-black border-2 mt-4">
                            <div className="w-auto h-auto border-black border-r-2 border-b-2 p-3">
                                <p className="text-2xl">
                                    rendering and frame times
                                </p>
                            </div>

                            <div className="w-full h-auto flex flex-row items-start justify-center gap-3 p-3">
                                <div className="w-auto h-auto flex flex-row items-stretch justify-center gap-3">
                                    <Media src={multiScrollTear} desc="text tearing (more noticeable with more scrolling text tasks)" />
                                    <Media src={multiScrollFixed} desc="no text tearing" />

                                </div>
                                <div className="w-full h-auto">
                                    <p className="text-xl">
                                        My initial technique was to run all tasks (i.e. incrimenting scrolling text) every frame, so some frames lasted longer than others depending on the amount of computation that needed to occur on a given frame (i.e. how many text instances needed to be scrolled). I tried to fix this by forcing a render at a fixed interval EVEN IF the tasks weren't complete, but this resulted in a tearing effect, meaning some parts of the same frame were rendered at a different time than others.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col items-start justify-start border-black border-2 mt-4">
                            <div className="w-auto h-auto border-black border-r-2 border-b-2 p-3">
                                <p className="text-2xl">
                                    limitations of a 16x16 display
                                </p>
                            </div>

                            <div className="w-full h-auto flex flex-row items-start justify-center gap-3 p-3">
                                <div className="w-auto h-auto flex flex-row items-stretch justify-center gap-3">
                                    <Media src={stockExperiment} desc="experiment for a stock ticker app. it's not very visually appealing when you barely have room for 3 lines of text" />
                                    <Media src={flashTest} desc="side-quest to flash myself in real life when I get flashed in VALORANT" />
                                </div>
                                <div className="w-full h-auto">
                                    <p className="text-xl">
                                        I had an idea to make some sort of framework to allow me to easily create different 'apps' for the display and control them from a web interface, but I quickly realized a 16x16 display is extremely limiting. I decided to narrow my ambitions and focus on a single app which could reasonably use 256 pixels to convey information.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="w-full h-auto mt-6">

                        <div className="w-full h-auto mb-4">
                            <p className="text-4xl">
                                what's the weather?
                            </p>
                            <div className="w-full h-[2px] bg-black mt-2" />
                        </div>

                        <div className="w-full h-auto flex flex-row items-start justify-center mt-4 gap-3">
                            <div className="w-full h-auto flex flex-col items-start justify-center gap-3">
                                <div className="w-auto h-auto flex flex-col items-start justify-start">
                                    <p className="text-xl">
                                        I ultimately settled on the idea of a live and dynamic weather display. Intended to be a decoration, the display would show the time, local weather, and have unique animated backgrounds for different weather conditions.
                                    </p>
                                </div>

                                <div className="w-auto h-auto flex flex-col items-start justify-start">
                                    <p className="text-xl">
                                        To get the current weather, I use the <a className="underline" href="https://openweathermap.org/api" target="_blank" rel="noreferrer">OpenWeatherMap API</a>, a free and data-rich weather API. Using the ESP32's built-in wireless capabilities, I can make all the requests and parse the data on-device, negating the need for a server of other middleman.
                                    </p>
                                </div>
                            </div>

                            <div className="w-auto h-auto flex flex-row items-stretch justify-center gap-3">
                                <Media src={sunnyEarly} isImage desc="early design for clear/sunny condition" openPreview={setPreview} />

                            </div>

                        </div>

                    </div>


                    <div className="w-full h-auto mt-6">

                        <div className="w-full h-auto mb-4">
                            <p className="text-4xl">
                                responsive design
                            </p>
                            <div className="w-full h-[2px] bg-black mt-2" />
                        </div>

                        <div className="w-full h-auto flex flex-col items-start justify-center mt-4 gap-3">
                            <div className="w-auto h-auto flex flex-col items-start justify-start">
                                <p className="text-xl">
                                    OpenWeatherMap provides descriptors for seven distinct weather conditions, so I programmed a unique animation for each condition with a variant for day and night. Additionally, OpenWeatherMap provides parameters for certain conditions, such as the rain amount, wind strength, and fog density. I use these parameters to make the condition animations responsive and dynamic.
                                </p>
                            </div>
                        </div>

                        <div className="w-3/4 h-auto flex flex-col items-start justify-center mx-auto mt-4">

                            <div className="w-full h-auto grid grid-cols-5 border-black border-2">
                                <div className="w-full h-auto p-3 col-span-1 border-black border-r-2">
                                    <p className="text-2xl">
                                        condition
                                    </p>
                                </div>
                                <div className="w-full h-auto p-3 col-span-2 border-black border-r-2">
                                    <p className="text-2xl">
                                        day variant
                                    </p>
                                </div>
                                <div className="w-full h-auto p-3 col-span-2 border-black">
                                    <p className="text-2xl">
                                        night variant
                                    </p>
                                </div>
                            </div>

                            {conditions.map((condition, i) => {

                                return (
                                    <div className="w-full h-auto grid grid-cols-5 border-black border-2 border-t-0">
                                        <div className="w-full h-auto p-3 col-span-1 border-black border-r-2">
                                            <p className="text-xl">
                                                {condition.name}
                                            </p>
                                        </div>
                                        <div className="w-full h-auto p-3 col-span-2 border-black border-r-2">
                                            <p className="text-2xl">
                                                
                                            </p>
                                        </div>
                                        <div className="w-full h-auto p-3 col-span-2 border-black">
                                            <p className="text-2xl">
                                                
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default ECEproject;