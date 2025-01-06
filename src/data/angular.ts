import { Project } from "@stackblitz/sdk";

export const angularProjectPrompt: Project = {
  title: "Angular Blog Project",
  description: "A dynamic blog layout built with Angular and styled using Tailwind CSS.",
  template: "node",
  settings: { compile: { trigger: "save", action: "hmr" } },
  files: {
    
   "tsconfig.spec.json":`
   /* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}`,

"tsconfig.json":`
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}`,

"tsconfig.app.json":`
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}`,

"tailwind.config.js":`
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
`,

"package.json":`{
  "name": "angular-example",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^19.0.0",
    "@angular/common": "^19.0.0",
    "@angular/compiler": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",
    "@angular/platform-browser": "^19.0.0",
    "@angular/platform-browser-dynamic": "^19.0.0",
    "@angular/router": "^19.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.0.6",
    "@angular/cli": "^19.0.6",
    "@angular/compiler-cli": "^19.0.0",
    "@types/jasmine": "~5.1.0",
    "autoprefixer": "^10.4.20",
    "jasmine-core": "~5.4.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.2"
  }
}`,

"angular.json":`
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "angular-example": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/angular-example",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": ["src/styles.css"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "angular-example:build:production"
            },
            "development": {
              "buildTarget": "angular-example:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": ["zone.js", "zone.js/testing"],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": ["src/styles.css"],
            "scripts": []
          }
        }
      }
    }
  }
}`,

"src/index.html":`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularExample</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,

"src/main.ts":`import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
`,

"src/styles.css":`
/* You can add global styles to this file, and also import other style files */
@tailwind base;
@tailwind components;
@tailwind utilities;`,

"src/app/app.routes.ts":`
import { Routes } from '@angular/router';

export const routes: Routes = [];
`,

"src/app/app.config.ts":`
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
`,

"src/app/app.component.ts":`
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,HeroSectionComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-example';
}`,

"src/app/app.component.spec.ts":`
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-example');
  });
});`,

"src/app/app.component.html":`
<app-header />

<app-hero-section />

<app-footer />
`,

"src/app/app.component.css":``,

"src/app/header/header.component.ts":`
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}`,

"src/app/header/header.component.spec.ts":`
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`,

"src/app/header/header.component.html":`
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
</header>`,

"src/app/header/header.component.css":``,

"src/app/hero-section/hero-section.component.ts":`
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}`,

"src/app/hero-section/hero-section.component.spec.ts":`
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`,

"src/app/hero-section/hero-section.component.html":`
<section class="bg-white text-black py-16 flex flex-col items-center">
  <h1 class="text-4xl font-extrabold mb-4">Welcome to My Blog</h1>
  <p class="text-lg mb-6 max-w-2xl text-center">
    Discover insights, stories, and experiences that inspire and educate. Dive
    into a world of creativity and knowledge with our thoughtfully crafted
    posts.
  </p>
  <button
    class="bg-gradient-to-r from-blue-400 to-orange-400 text-white py-2 px-6 rounded-full shadow hover:opacity-90"
  >
    Read More
  </button>
</section>`,

"src/app/hero-section/hero-section.component.css":``,

"src/app/footer/footer.component.ts":`
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}`,

"src/app/footer/footer.component.spec.ts":`
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`,

"src/app/footer/footer.component.html":`
<footer class="bg-black text-white py-6">
  <div class="max-w-6xl mx-auto px-4">
    <p class="text-center text-sm">
      &copy; 2023 My Blog. All rights reserved.
    </p>
    <p class="text-center text-sm">
      <a href="#about" class="hover:underline text-gray-400">About</a>
      <a href="#contact" class="hover:underline text-gray-400">Contact</a>
    </p>
  </div>
</footer>`,

"src/app/footer/footer.component.css":``,
  }
};
