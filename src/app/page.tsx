"use client";

import { angularProjectPrompt } from "@/data-sdk/angular";
import { nextJsTailwindProject } from "@/data-sdk/next";
import { nodeFileBasedTodoAppPrompt } from "@/data-sdk/nodejs";
import { ReactFirebaseCounterProject } from "@/data-sdk/react+firebase";
import { ReactSupabaseCounterProject } from "@/data-sdk/react+supabase";
import { reactViteProjectPrompt } from "@/data-sdk/react+vite";
import { vueViteProjectPrompt } from "@/data-sdk/vue+vite";
import StackBlitzSDK from "@stackblitz/sdk";
import { Resizable } from "re-resizable";

const currentFramework = "angular";

const FrameWork = {
  reactVite: {
    prompt: reactViteProjectPrompt,
    startScript: "dev",
  },
  vueVite: {
    prompt: vueViteProjectPrompt,
    startScript: "dev",
  },
  reactFirebase: {
    prompt: ReactFirebaseCounterProject,
    startScript: "dev",
  },
  reactSupabase: {
    prompt: ReactSupabaseCounterProject,
    startScript: "dev",
  },
  next: {
    prompt: nextJsTailwindProject,
    startScript: "dev",
  },
  angular: {
    prompt: angularProjectPrompt,
    startScript: "start",
  },
  nodejs: {
    prompt: nodeFileBasedTodoAppPrompt,
    startScript: "start",
  },
};

export default function Home() {
  const handleStartIDE = async () => {
    StackBlitzSDK.embedProject("embed", FrameWork[currentFramework].prompt, {
      height: 1000,
      openFile: "package.json",
      terminalHeight: 50,
      startScript: FrameWork[currentFramework].startScript,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center w-full">
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
