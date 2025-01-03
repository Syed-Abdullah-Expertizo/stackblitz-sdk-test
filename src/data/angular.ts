import { Project } from "@stackblitz/sdk";

export const angularProjectPrompt: Project = {
  title: "Angular Blog Project",
  description: "A dynamic blog layout built with Angular and styled using Tailwind CSS.",
  template: "node",
  settings: { compile: { trigger: "save", action: "refresh" } },
  files: {
    "src/index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Angular Blog Project</title>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>`,

    "src/main.ts": `import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));`,

    "src/app/app.module.ts": `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    BlogListComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}`,

    "src/app/app.component.ts": `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <app-header></app-header>
    <app-hero-section></app-hero-section>
    <div class="flex flex-col md:flex-row px-4 md:px-16 py-8">
      <div class="w-full md:w-2/3">
        <app-blog-list></app-blog-list>
      </div>
      <div class="w-full md:w-1/3 mt-8 md:mt-0">
        <app-sidebar></app-sidebar>
      </div>
    </div>
    <app-footer></app-footer>
  \`,
  styles: []
})
export class AppComponent {}`,

    "src/app/components/header/header.component.ts": `import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {}`,

    "src/app/components/header/header.component.html": `<header class="bg-black text-white px-4 py-2 flex justify-between items-center">
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
</header>`,

    "src/app/components/hero-section/hero-section.component.ts": `import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  scrollToContent(): void {
    document.getElementById('mainContent')?.scrollIntoView({ behavior: 'smooth' });
  }
}`,

    "src/app/components/hero-section/hero-section.component.html": `<section class="bg-white text-black py-16 flex flex-col items-center">
  <h1 class="text-4xl font-extrabold mb-4">Welcome to My Blog</h1>
  <p class="text-lg mb-6 max-w-2xl text-center">
    Discover insights, stories, and experiences that inspire and educate.
  </p>
  <button
    class="bg-gradient-to-r from-blue-400 to-orange-400 text-white py-2 px-6 rounded-full shadow hover:opacity-90"
    (click)="scrollToContent()"
  >
    Read More
  </button>
</section>`,

"src/app/components/blog-list/blog-list.component.ts":`
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  posts = [
    { id: 1, title: 'First Blog Post', date: 'Oct 1, 2023', excerpt: 'This is the first blog post.', image: 'image1.jpg' },
    { id: 2, title: 'Second Blog Post', date: 'Oct 10, 2023', excerpt: 'This is the second blog post.', image: 'image2.jpg' },
    { id: 3, title: 'Third Blog Post', date: 'Oct 20, 2023', excerpt: 'This is the third blog post.', image: 'image3.jpg' },
  ];

  readMore(title: string): void {
    alert("Read More clicked for ");
  }
}
`,

"src/app/components/blog-list/blog-list.component.html":`
<div id="mainContent" class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  <div
    *ngFor="let post of posts"
    class="border rounded-lg overflow-hidden shadow hover:shadow-lg"
  >
    <img [src]="post.image" [alt]="post.title" class="h-48 w-full object-cover" />
    <div class="p-4">
      <h3 class="font-bold text-lg">{{ post.title }}</h3>
      <p class="text-gray-600 text-sm">{{ post.date }}</p>
      <p class="text-gray-700 mt-2">{{ post.excerpt }}</p>
      <button
        class="mt-4 text-blue-500 hover:underline text-sm"
        (click)="readMore(post.title)"
      >
        Read More
      </button>
    </div>
  </div>
</div>

`,

"src/app/components/sidebar/sidebar.component.ts":`
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {}
`,

"src/app/components/sidebar/sidebar.component.html":`
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

`,

"src/app/components/footer/footer.component.ts":`
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}

`,

"src/app/components/footer/footer.component.html":`
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

`,

    "src/styles.css": `@tailwind base;
@tailwind components;
@tailwind utilities;`,

    "angular.json": `{
  "version": 1,
  "projects": {
    "angular-blog": {
      "projectType": "application",
      "root": "",
      "sourceRoot": "src",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "tsConfig": "src/tsconfig.app.json",
            "styles": ["src/styles.css"]
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "angular-blog:build",
            "tsConfig": "src/tsconfig.app.json"
          }
        }
      }
    }
  }
}`,

    "package.json": `{
  "name": "angular-blog",
  "version": "1.0.0",
  "scripts": {
    "start": "ng serve",
    "build": "ng build"
  },
  "dependencies": {
    "@angular/core": "^16.0.0",
    "@angular/common": "^16.0.0",
    "@angular/compiler": "^16.0.0",
    "@angular/platform-browser": "^16.0.0",
    "@angular/platform-browser-dynamic": "^16.0.0",
    "tailwindcss": "^3.2.7"
  },
  "devDependencies": {
    "@angular/cli": "^16.0.0",
    "@angular/compiler-cli": "^16.0.0",
    "@angular-devkit/build-angular": "^16.0.0",
    "typescript": "~4.9.5"
  }
}`,

    "src/tsconfig.app.json": `{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": []
  },
  "files": ["main.ts"],
  "include": ["**/*.ts"]
}`,
"src/tsconfig.json": `{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "module": "es2020",
    "typeRoots": ["node_modules/@types"],
    "lib": ["es2018", "dom"]
  }
}
`
  }
};
