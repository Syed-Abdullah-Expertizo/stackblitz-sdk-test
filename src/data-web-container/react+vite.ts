export const ReactViteProjectFilesWC = {
  "index.html": {
    file: {
      contents: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite React Blog Project</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="src/main.tsx"></script>
    </body>
  </html>`,
    },
  },

  src: {
    directory: {

    "index.css": {
      file: {
        contents: `@tailwind base;
        @tailwind components;
         @tailwind utilities;`,
      },
    },

      "main.tsx": {
        file: {
          contents: `import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";
   import './index.css'
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`,
        },
      },

      "App.tsx": {
        file: {
          contents: `import React from "react";
  import GeneratedPage from "./generatedPage";
  
  export default function App() {
    return <GeneratedPage />;
  };`,
        },
      },

      "generatedPage.tsx": {
        file: {
          contents: `import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold">My Blog</div>
      <nav className="flex gap-4 text-sm">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#categories" className="hover:underline">Categories</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <input
        type="text"
        placeholder="Search..."
        className="ml-4 p-1 text-sm rounded border border-gray-400"
      />
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-16 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-6 max-w-2xl text-center">
        Discover insights, stories, and experiences that inspire and educate.
        Dive into a world of creativity and knowledge with our thoughtfully
        crafted posts.
      </p>
      <button
        className="bg-gradient-to-r from-blue-400 to-orange-400 text-white py-2 px-6 rounded-full shadow hover:opacity-90"
        onClick={() =>
          document.getElementById("mainContent")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Read More
      </button>
    </section>
  );
};

const BlogList: React.FC = () => {
  const posts = [
    { id: 1, title: "First Blog Post", date: "Oct 1, 2023", excerpt: "This is the first blog post.", image: "image1.jpg" },
    { id: 2, title: "Second Blog Post", date: "Oct 10, 2023", excerpt: "This is the second blog post.", image: "image2.jpg" },
    { id: 3, title: "Third Blog Post", date: "Oct 20, 2023", excerpt: "This is the third blog post.", image: "image3.jpg" },
  ];

  return (
    <div id="mainContent" className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg">
          <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
            <button
              className="mt-4 text-blue-500 hover:underline text-sm"
              onClick={() => alert("Read More clicked for " + post.title)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm">
          &copy; 2023 My Blog. All rights reserved.
        </p>
        <p className="text-center text-sm">
          <a href="#about" className="hover:underline text-gray-400">About</a> |
          <a href="#contact" className="hover:underline text-gray-400">Contact</a>
        </p>
      </div>
    </footer>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="p-4 border rounded shadow-md bg-white">
      <h2 className="font-bold text-lg mb-2">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <a href="#link1" className="text-blue-500 hover:underline">Link 1</a>
        </li>
        <li>
          <a href="#link2" className="text-blue-500 hover:underline">Link 2</a>
        </li>
        <li>
          <a href="#link3" className="text-blue-500 hover:underline">Link 3</a>
        </li>
      </ul>
    </aside>
  );
};

const GeneratedPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="flex flex-col md:flex-row px-4 md:px-16 py-8">
        <div className="w-full md:w-2/3">
          <BlogList />
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GeneratedPage;
`,
        },
      },
    },
  },

  "tailwind.config.js": {
    file: {
      contents: `module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };`,
    },
  },

  "postcss.config.js": {
    file: {
      contents: `module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };`,
    },
  },

  "vite.config.ts": {
    file: {
      contents: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});
`,
    },
  },

  "package.json": {
    file: {
      contents: `{
    "name": "vite-react-ts-blog",
    "version": "1.0.0",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    },
    "devDependencies": {
      "@vitejs/plugin-react": "^3.0.0",
      "autoprefixer": "^10.4.12",
      "postcss": "^8.4.19",
      "tailwindcss": "^3.2.7",
      "vite": "^4.3.9",
      "typescript": "^4.9.5"
    }
  }`,
    },
  },

  "tsconfig.json": {
    file: {
      contents: `{
    "compilerOptions": {
      "target": "ESNext",
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "allowJs": false,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "react-jsx",
      "outDir": "./dist"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  }`,
    },
  },
};
