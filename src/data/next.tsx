import type { Project } from "@stackblitz/sdk";

export const nextJsTailwindProject: Project = {
  title: "Next.js Blog Project",
  description:
    "A dynamic blog layout built with Next.js and styled using Tailwind CSS.",
  template: "node",
  settings: { compile: { trigger: "save", action: "refresh" } },
  files: {
    "package.json": `{
  "name": "nextjs-blog",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.4.9",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.2.7",
    "autoprefixer": "^10.4.12",
    "postcss": "^8.4.19"
  }
}`,
    "postcss.config.js": `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,
    "tailwind.config.js": `module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
    "styles/globals.css": `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    "pages/_app.jsx": `import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}`,
    "pages/index.jsx": `import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default function Home() {
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
}`,
    "components/Header.jsx": `import React from 'react';

const Header = () => (
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

export default Header;`,
    "components/HeroSection.jsx": `import React from 'react';

const HeroSection = () => (
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

export default HeroSection;`,
    "components/BlogList.jsx": `import React from 'react';

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

export default BlogList;`,
    "components/Sidebar.jsx": `import React from 'react';

const Sidebar = () => (
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

export default Sidebar;`,
    "components/Footer.jsx": `import React from 'react';

const Footer = () => (
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

export default Footer;`,
  },
};
