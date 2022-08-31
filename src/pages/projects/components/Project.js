import Icon from '@mdi/react'
import { mdiStarOutline, mdiSourceBranch, mdiDownload } from '@mdi/js'

function Project(props) {


    return (
        <div className="w-full h-auto">

            <div className="w-full h-full flex flex-row items-stretch justify-start">
                <p className="min-h-full p-3 text-3xl border-black border-r-2 border-l-2 border-t-2 border-b-2 text-center">
                    valorant-rpc
                </p>

                <div className="min-h-full w-auto px-5 flex flex-row items-center justify-center border-black border-r-2 border-b-2 border-t-2">
                    <a href="https://github.com/colinhartigan/valorant-rpc" target="_blank" rel="noreferrer" className="text-lg text-center underline">
                        github
                    </a>
                </div>

                <div className="min-h-full grow bg-black border-black border-2">

                </div>
            </div>

            <div className="w-full h-full flex flex-row items-stretch justify-start border-black border-b-2">

                <div className="min-h-full w-full p-2 flex flex-row items-center justify-center border-black border-r-2 border-l-2">
                    <Icon path={mdiDownload} size={1} />
                    <p className="text-lg ml-1">
                        123
                    </p>
                </div>

                <div className="min-h-full w-full p-2 flex flex-row items-center justify-center border-black border-r-2">
                    <Icon path={mdiStarOutline} size={1} />
                    <p className="text-lg ml-1">
                        123
                    </p>
                </div>

                <div className="min-h-full w-full p-2 flex flex-row items-center justify-center border-black border-r-2">
                    <Icon path={mdiSourceBranch} size={1} />
                    <p className="text-lg ml-1">
                        123
                    </p>
                </div>

            </div>

            <div className="w-full h-full flex flex-col items-center justify-center border-black border-l-2 border-r-2 border-b-2">
                <p className="text-xl p-3">
                    a discord rich presence implementation for VALORANT featuring a full set of art assets and descriptive presence states
                </p>
            </div>

            <div className="min-w-full h-auto flex flex-row flex-auto items-stretch justify-center border-black border-l-2 border-r-2 border-b-2">

                <div className="w-[50%] min-h-full p-2 flex flex-col items-center justify-center border-black border-r-2">
                    <p className="text-lg text-center">
                        python
                    </p>
                </div>
                <div className="w-[50%] min-h-full p-2 flex flex-col items-center justify-center">
                    <p className="text-lg text-center">
                        cli interface, webserver, discord integration
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Project