"use client";

import { angularProjectPrompt } from "@/data/angular";
import { nextJsTailwindProject } from "@/data/next";
import { reactViteProjectPrompt } from "@/data/react+vite";
import { vueViteProjectPrompt } from "@/data/vue+vite";
import StackBlitzSDK from "@stackblitz/sdk";

export default function Home() {
  const handleStartIDE = async () => {
    StackBlitzSDK.embedProject("embed", reactViteProjectPrompt, {
      height: 1000,
      openFile: "index.js",
      terminalHeight: 50,
      startScript: "dev",
    });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <button
        className="px-6 py-2 rounded-md bg-blue-500 border-black border text-white font-bold"
        onClick={handleStartIDE}
      >
        Start
      </button>

      <div id="embed">
        <p>Embed will go here</p>
      </div>
    </div>
  );
}
