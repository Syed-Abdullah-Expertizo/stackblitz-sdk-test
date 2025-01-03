import type { Project } from "@stackblitz/sdk";

export const vueViteProjectPrompt: Project = {
  title: "Vite Vue Blog Project",
  description:
    "A dynamic blog layout built with Vue.js and styled using Tailwind CSS, bootstrapped with Vite.",
  template: "node",
  settings: { compile: { trigger: "save", action: "refresh" } },
  files: {
    "index.html": `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite Vue Blog Project</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`,
    "src/main.js": `import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

createApp(App).mount('#app');
`,
    "src/App.vue": `
<template>
  <GeneratedPage />
</template>

<script>
import GeneratedPage from './GeneratedPage.vue';

export default {
  components: {
    GeneratedPage,
  },
};
</script>
`,
    "src/GeneratedPage.vue": `
<template>
  <div>
    <Header />
    <HeroSection />
    <div class="flex flex-col md:flex-row px-4 md:px-16 py-8">
      <div class="w-full md:w-2/3">
        <BlogList />
      </div>
      <div class="w-full md:w-1/3 mt-8 md:mt-0">
        <Sidebar />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './pages/Header.vue';
import HeroSection from './pages/HeroSection.vue';
import BlogList from './pages/BlogList.vue';
import Footer from './pages/Footer.vue';
import Sidebar from './pages/Sidebar.vue';

export default {
  components: {
    Header,
    HeroSection,
    BlogList,
    Footer,
    Sidebar,
  },
};
</script>
`,
    "src/pages/Header.vue": `
<template>
  <header class="bg-black text-white px-4 py-2 flex justify-between items-center">
    <div class="text-xl font-bold">My Blog</div>
    <nav class="flex gap-4 text-sm">
      <a href="#home" class="hover:underline">Home</a>
      <a href="#about" class="hover:underline">About</a>
      <a href="#categories" class="hover:underline">Categories</a>
      <a href="#contact" class="hover:underline">Contact</a>
    </nav>
    <input
      type="text"
      placeholder="Search..."
      class="ml-4 p-1 text-sm rounded border border-gray-400"
    />
  </header>
</template>
`,
    "src/pages/HeroSection.vue": `
<template>
  <section class="bg-white text-black py-16 flex flex-col items-center">
    <h1 class="text-4xl font-extrabold mb-4">Welcome to My Blog</h1>
    <p class="text-lg mb-6 max-w-2xl text-center">
      Discover insights, stories, and experiences that inspire and educate. Dive into a world of creativity and knowledge with our thoughtfully crafted posts.
    </p>
    <button
      class="bg-gradient-to-r from-blue-400 to-orange-400 text-white py-2 px-6 rounded-full shadow hover:opacity-90"
      @click="scrollToContent"
    >
      Read More
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToContent() {
      document.getElementById('mainContent')?.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
`,
    "src/pages/BlogList.vue": `
<template>
  <div id="mainContent" class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    <div
      v-for="post in posts"
      :key="post.id"
      class="border rounded-lg overflow-hidden shadow hover:shadow-lg"
    >
      <img :src="post.image" :alt="post.title" class="h-48 w-full object-cover" />
      <div class="p-4">
        <h3 class="font-bold text-lg">{{ post.title }}</h3>
        <p class="text-gray-600 text-sm">{{ post.date }}</p>
        <p class="text-gray-700 mt-2">{{ post.excerpt }}</p>
        <button
          class="mt-4 text-blue-500 hover:underline text-sm"
          @click="readMore(post.title)"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'First Blog Post', date: 'Oct 1, 2023', excerpt: 'This is the first blog post.', image: 'image1.jpg' },
        { id: 2, title: 'Second Blog Post', date: 'Oct 10, 2023', excerpt: 'This is the second blog post.', image: 'image2.jpg' },
        { id: 3, title: 'Third Blog Post', date: 'Oct 20, 2023', excerpt: 'This is the third blog post.', image: 'image3.jpg' },
      ],
    };
  },
  methods: {
    readMore(title) {
      alert('Read More clicked for ');
    },
  },
};
</script>
`,
    "src/pages/Sidebar.vue": `
<template>
  <aside class="p-4 border rounded-lg shadow">
    <section class="mb-6">
      <h2 class="font-bold text-lg mb-3">Recent Posts</h2>
      <ul>
        <li><a href="#post1" class="text-blue-500 hover:underline">First Blog Post</a></li>
        <li><a href="#post2" class="text-blue-500 hover:underline">Second Blog Post</a></li>
      </ul>
    </section>
    <section class="mb-6">
      <h2 class="font-bold text-lg mb-3">Popular Posts</h2>
      <ul>
        <li><a href="#postA" class="text-blue-500 hover:underline">Popular Post A</a></li>
        <li><a href="#postB" class="text-blue-500 hover:underline">Popular Post B</a></li>
      </ul>
    </section>
    <section>
      <h2 class="font-bold text-lg mb-3">Categories</h2>
      <ul>
        <li><a href="#cat1" class="text-blue-500 hover:underline">Technology</a></li>
        <li><a href="#cat2" class="text-blue-500 hover:underline">Design</a></li>
      </ul>
    </section>
  </aside>
</template>
`,
    "src/pages/Footer.vue": `
<template>
  <footer class="bg-black text-white py-6">
    <div class="max-w-6xl mx-auto px-4">
      <p class="text-center text-sm">
        &copy; 2023 My Blog. All rights reserved.
      </p>
      <p class="text-center text-sm">
        <a href="#about" class="hover:underline text-gray-400">About</a> | 
        <a href="#contact" class="hover:underline text-gray-400">Contact</a>
      </p>
    </div>
  </footer>
</template>
`,
    "src/index.css": `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    "vite.config.js": `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
});
`,
    "tailwind.config.js": `module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
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
  "name": "vite-vue-blog",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.1.0",
    "autoprefixer": "^10.4.12",
    "postcss": "^8.4.19",
    "tailwindcss": "^3.2.7",
    "vite": "^4.3.9"
  }
}`,
  },
};
