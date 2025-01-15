import type { Project } from "@stackblitz/sdk";

export const ReactFirebaseCounterProject: Project = {
  title: "React Firebase Counter",
  description: "A simple React counter app using Tailwind CSS and Firebase Realtime Database.",
  template: "node",
  settings: { compile: { trigger: "save", action: "hmr" } },
  files: {
  "vite.config.ts":`
  import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});`,

"tsconfig.node.json":`
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}`,

"tsconfig.json":`{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}`,

"tsconfig.app.json":`
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}`,

"tailwind.config.js":`
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};`,

"postcss.config.js":`
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,

"package.json":`
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "firebase": "^10.8.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}`,

"index.html":`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

"eslint.config.js":`
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);`,

"src/main.tsx":`
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,

"src/index.css":`
@tailwind base;
@tailwind components;
@tailwind utilities;`,

"src/firebase.ts":`
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyByIN-ewaV_zV-1FWabjEHKzfcLhovyfp4",
  authDomain: "wireons-chat.firebaseapp.com",
  databaseURL: "https://wireons-chat-default-rtdb.firebaseio.com",
  projectId: "wireons-chat",
  storageBucket: "wireons-chat.firebasestorage.app",
  messagingSenderId: "853472725918",
  appId: "1:853472725918:web:89e514dd5e64fd0897648f",
  measurementId: "G-4G44G72NK1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);`,

"src/App.tsx":`
import React from 'react';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Counter />
    </div>
  );
}

export default App;`,

"src/components/Counter.tsx":`
import React, { useEffect, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../firebase';
import { Minus, Plus } from 'lucide-react';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterRef = ref(db, 'counter');
    
    // Listen for changes in the counter value
    const unsubscribe = onValue(counterRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setCount(data);
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const updateCounter = async (newValue: number) => {
    try {
      await set(ref(db, 'counter'), newValue);
    } catch (error) {
      console.error('Error updating counter:', error);
    }
  };

  const increment = () => updateCounter(count + 1);
  const decrement = () => updateCounter(count - 1);

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-gray-800">Firebase Counter</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center gap-6">
          <button
            onClick={decrement}
            className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Minus size={24} />
          </button>
          <span className="text-5xl font-bold min-w-[120px] text-center">
            {count}
          </span>
          <button
            onClick={increment}
            className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        The counter is synchronized in real-time with Firebase
      </p>
    </div>
  );
}`
  },
};
