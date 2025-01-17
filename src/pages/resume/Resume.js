import resume from '../../assets/resume.pdf';

function NotFound(props) {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-end">
            <embed className="flex-grow max-w-[1000px] h-auto pt-16" title="resume" src={resume} width="100%" height="auto" type="application/pdf" />
            <div className="h-16 pt-4">
                <p className="text-xl">Last updated: 01/11/2023</p>
            </div>
        </div>
    )
}

export default NotFound;