import type { Project } from "@stackblitz/sdk";

export const reactViteProjectPrompt: Project = {
  title: "Vite React Blog Project",
  description:
    "A dynamic blog layout built with React and styled using Tailwind CSS, bootstrapped with Vite.",
  template: "node",
  settings: { compile: { trigger: "save", action: "refresh" } },
  files: {
    "index.html": `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite React Blog Project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,
    "src/main.jsx": `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
    "src/App.jsx": `import React from 'react';
import GeneratedPage from './generatedPage';

export default function App() {
  return <GeneratedPage />;
}
`,
    "src/generatedPage.jsx": `import React from 'react';
import Header from './pages/Header';
import HeroSection from './pages/HeroSection';
import BlogList from './pages/BlogList';
import Footer from './pages/Footer';
import Sidebar from './pages/Sidebar';

const GeneratedPage = () => {
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
    "src/pages/Header.jsx": `import React from 'react';

const Header = () => {
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

export default Header;
`,
    "src/pages/HeroSection.jsx": `import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white text-black py-16 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-6 max-w-2xl text-center">
        Discover insights, stories, and experiences that inspire and educate. Dive into a world of creativity and knowledge with our thoughtfully crafted posts.
      </p>
      <button
        className="bg-gradient-to-r from-blue-400 to-orange-400 text-white py-2 px-6 rounded-full shadow hover:opacity-90"
        onClick={() => {
          document.getElementById('mainContent')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Read More
      </button>
    </section>
  );
};

export default HeroSection;
`,
    "src/pages/BlogList.jsx": `import React from 'react';

const BlogList = () => {
  const posts = [
    { id: 1, title: 'First Blog Post', date: 'Oct 1, 2023', excerpt: 'This is the first blog post.', image: 'image1.jpg' },
    { id: 2, title: 'Second Blog Post', date: 'Oct 10, 2023', excerpt: 'This is the second blog post.', image: 'image2.jpg' },
    { id: 3, title: 'Third Blog Post', date: 'Oct 20, 2023', excerpt: 'This is the third blog post.', image: 'image3.jpg' },
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
              onClick={() => alert('Read More clicked for ' + post.title)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
`,
    "src/pages/Sidebar.jsx": `import React from 'react';

const Sidebar = () => {
  return (
    <aside className="p-4 border rounded-lg shadow">
      <section className="mb-6">
        <h2 className="font-bold text-lg mb-3">Recent Posts</h2>
        <ul>
          <li><a href="#post1" className="text-blue-500 hover:underline">First Blog Post</a></li>
          <li><a href="#post2" className="text-blue-500 hover:underline">Second Blog Post</a></li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="font-bold text-lg mb-3">Popular Posts</h2>
        <ul>
          <li><a href="#postA" className="text-blue-500 hover:underline">Popular Post A</a></li>
          <li><a href="#postB" className="text-blue-500 hover:underline">Popular Post B</a></li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold text-lg mb-3">Categories</h2>
        <ul>
          <li><a href="#cat1" className="text-blue-500 hover:underline">Technology</a></li>
          <li><a href="#cat2" className="text-blue-500 hover:underline">Design</a></li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
`,
    "src/pages/Footer.jsx": `import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm">
          &copy; 2023 My Blog. All rights reserved.
        </p>
        <p className="text-center text-sm">
          <a href="#about" className="hover:underline text-gray-400">About</a> |{' '}
          <a href="#contact" className="hover:underline text-gray-400">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
`,
    "src/index.css": `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    "vite.config.js": `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`,
    "tailwind.config.js": `module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
    "postcss.config.js": `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,
    "package.json": `{
  "name": "vite-react-blog",
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
    "vite": "^4.3.9"
  }
}`,
  },
};
