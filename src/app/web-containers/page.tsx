'use client'

import { ReactViteProjectFilesWC } from "@/data-web-container/react+vite";
import { useRouter } from "next/navigation";


const WebContainerProject = () => {

    const router = useRouter()

    const handleNext = () => {
        let LSD = JSON.stringify(ReactViteProjectFilesWC)
        localStorage.setItem('projData', LSD)
        const relativeUrl = `${window.location.origin}/preview`;
        console.log(relativeUrl)
        window.open(relativeUrl, '_blank');
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <button onClick={handleNext} className="bg-black px-4 py-2 rounded-md text-white">Open Project</button>
        </div>
    );
};

export default WebContainerProject;
