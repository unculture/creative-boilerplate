# SmartContent Campaign Creative Boilerplate

## Getting Started

1. Clone the `campaign-boilerplate` repository:

    `git clone git@bitbucket.org:dynamicdo/campaign-boilerplate.git <new-campaign>`
    
    Where `<new-campaign>` is the desired folder name for the new campaign.
    
2. Go into the new campaign folder:
    
    `cd <new-campaign>`

3. Edit `package.json` replacing the value of `name` with the campaign name.

4. Initialize a new git repository:

    - `rm -rf .git`
    - `git init`
    - `git add .`
    - `git commit -am "Initial commit"`
    - `git remote add origin <new-campaign-git-repo>`
    - `git push origin master`

5. Install the node packages:

    - `npm install`

    _Note:_ The campaign boilerplate is tested with the following node versions: 

    `node -v => v6.3.1`

    `npm -v => 3.10.3`

6. Now execute `npm run dev` and look for clean output and no errors.
This will start a watch process so hit Ctl+C to cancel.

## Build Overview

Front-end build system uses Laravel Elixir, a gulp wrapper. 

### Build Folder Structure

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

### Build Tasks

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

- css/main.css
- js/main.js

### CSS

The `main.css` stylesheet is compiled from the `src/sass/main.scss` entrypoint.

The included `scss` file gives you an idea for how to structure your styling.

### Javascript

#### Creative Classes

The `main.js` script is transpiled from the `src/js/main.js` entrypoint. This file
is copied from the SmartContent CDK and should not be edited.

Your ECMAScript 2015 code should begin in `Creative.js` which should extend one of the following
base classes from the SmartContent CDK:
 
| Class                 | Where creative requires...                                        |
|-----------------------|-------------------------------------------------------------------|
| VueCreative           | Component based templating features                               |
| JqueryCreative        | Non trivial DOM manipulation                                      | 
| BaseCreative          | Trivial DOM manipulation                                          |

These provide an API with many of the helper functions needed to build a creative. The source of
each class is well commented so you are advised to take a look at the methods available.

#### Additional Libraries

The following libraries are preinstalled and available for import:

- lodash
- moment

You may `npm install` any additional libraries you need, although always bear in mind file size of the final bundle.
