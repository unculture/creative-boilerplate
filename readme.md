# SmartContent Campaign Creative Boilerplate

## Build Overview

Front-end build system uses Laravel Elixir, a gulp wrapper. 

## Build Folder Structure

| Folder            | Description                                       |
|-------------------|---------------------------------------------------|
| src/js            | ECMAScript2015 scripts                            |
| src/sass          | SASS files                                        |
| src/fonts         | Custom fonts, copied to dist                      |
| src/images        | Images, copied to dist                            |
| dist              | Folder for distribution, zipped by prod script    |
| dist/index.html   | Creative HTML                                     |
| dist/css          | Compiled CSS                                      |
| dist/js           | Transpiled JS                                     |
| zip               | Destination for creative zip files                |
| test              | Test campaign data here                           |
| bin               | Helper scripts                                    |

## Build Tasks

Build tasks should be run using the following npm scripts:

| Task              | Description                                                               |
|-------------------|---------------------------------------------------------------------------|
| `npm run dev`     | watches `src` folder for changes & builds into `dist`                     |
| `npm run prod`    | cleans `dist` and `zip`, builds for production into `dist` & produces zip |
| `npm run clean`   | cleans `dist` and `zip` folders                                           |
| `npm run zip`     | produces campaign ZIP file from `dist`                                    |

The gulpfile with this boilerplate should require little modification. This includes the following tasks:

| Task      | Description                                               | when                  |
|-----------|-----------------------------------------------------------|-----------------------|
| clean()   | Deletes contents of `dist` and `zip`                      | dev / prod / clean    |
| cdk()     | Copies SmartContent CDK files into `src`                  | dev / prod            |
| copy()    | Copy tasks for HTML, fonts, and images                    | dev / prod            |
| sass()    | Compiles `src/sass/main.sass` into `dist/css/main.css`    | dev / prod **         |
| rollup()  | Transpiles `src/js/main.js` into `dist/js/main.js`        | dev / prod **         |
| zip()     | Creates campaign ZIP file in `zip`                        | prod / zip            |

** See table below

| Task              | Minifies  | Source maps   |
|-------------------|-----------|---------------|
| `npm run dev`     | no        | yes           |
| `npm run prod`    | yes       | no            |            

## Creative Structure

### HTML

A creative consists of a single `index.html` file which includes one CSS file and one Javascript file:

- main.css
- main.js

### CSS

The `main.css` stylesheet is compiled from the `src/sass/main.scss` entrypoint.

The included `scss` file gives you an idea for how to structure your styling.

### Javascript

The `main.js` script is transpiled from the `src/js/main.js` entrypoint. This file
is copied from the SmartContent CDK and should not be edited.

Your ECMAScript 2015 code should begin in `Creative.js` which should extend one of the following
classes from the SmartContent CDK:
 
 - VueCreative.js
 - JqueryCreative.js
 - BaseCreative.js
 
These classes contain all the helper functions you need.

