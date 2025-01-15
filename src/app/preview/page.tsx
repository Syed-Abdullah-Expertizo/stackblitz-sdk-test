'use client'

import { WebContainer } from "@webcontainer/api";
import { useEffect, useState } from "react";
import { ReactViteProjectFilesWC } from "../../data-web-container/react+vite";

const WebContainerProject = () => {

    const [iframeSrc, SetIframeSrc] = useState<string | null>(null)
    const [projData, setProjData] = useState<ArrayBuffer | null>(null)

    const startWebContainer = async () => {
        if (!projData) { return }
        try {
            // Initialize WebContainer
            const webcontainer = await WebContainer.boot();

            // Mount files into WebContainer
            await webcontainer.mount(projData);

            // Install dependencies
            const installProcess = await webcontainer.spawn("npm", ["install"]);
            installProcess.output.pipeTo(
                new WritableStream({
                    write(data) {
                        console.log(data);
                    },
                })
            );
            await installProcess.exit;

            // Start the development server
            const serverProcess = await webcontainer.spawn("npm", ["run", "dev"]);
            serverProcess.output.pipeTo(
                new WritableStream({
                    write(data) {
                        console.log(data);
                    },
                })
            );

            // Wait for server to be ready
            webcontainer.on("server-ready", (port, url) => {
                console.log(`Server is running at ${url}`);
                SetIframeSrc(url)
            });
        } catch (error) {
            console.error("Error starting WebContainer:", error);
        }
    };

    useEffect(() => {
        startWebContainer();
    }, [projData]);

    useEffect(() => {
        let LSD = localStorage.getItem('projData')
        if (!LSD) { return }
        let data = JSON.parse(LSD)
        console.log(typeof data)
        if (typeof data === 'object') {
            setProjData(data)
        }
    }, [])

    return (
        <div>
            {iframeSrc ?
                <iframe className="w-screen h-screen" id="embed" src={iframeSrc} />
                :
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin border-t-transparent border-r-transparent border-b-transparent"></div>
                </div>
            }
        </div>
    );
};

export default WebContainerProject;
