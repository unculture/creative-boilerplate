# SmartContent Creative Boilerplate

## System Requirements

The creative boilerplate is tested with the following software versions: 

```
$ bash --version
GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin16)
    
$ node -v
v6.3.1

$ npm -v
3.10.3
```

## Getting Started
 
1. Clone the `creative-boilerplate` repository:

    `git clone https://github.com/dynamicdo/creative-boilerplate <new-creative>`
    
    Where `<new-creative>` is the desired folder name for the new creative.
    
2. Go into the new creative folder:
    
    `cd <new-creative>`

3. Run `./setup.sh` which will perform the following tasks:

    * Updates `package.json` replacing the values of `name` and `description` with those for the new creative.
    * Clears contents of the `readme.md` file.
    * Initialises a new git repository
        - `rm -rf .git`
        - `git init`
        - `git remote add origin <new-creative-git-repo>`
        - `git add .`
        - `git commit -am "Initial commit"`
        - `git push origin master`
        - `npm install`


4. Now execute `npm run dev` and look for clean output and no errors.
This will start a watch process so hit Ctl+C to cancel.

## Build Overview

Front-end build system uses Laravel Elixir, a gulp wrapper. 

### Build Folder Structure

| Folder            | Description                                       |
|-------------------|---------------------------------------------------|
| assets            | Pre-processed images                              |
| src/js            | ECMAScript2015 scripts                            |
| src/sass          | SASS files                                        |
| src/fonts         | Custom fonts, copied to dist                      |
| src/images        | Images, copied to dist                            |
| dist              | Folder for distribution, zipped by prod script    |
| dist/index.html   | Creative HTML                                     |
| dist/css          | Compiled CSS                                      |
| dist/js           | Transpiled JS                                     |
| zip               | Destination for creative zip files                |
| test/data         | Test data                                         |
| test/assets       | Test assets                                       |
| bin               | Helper scripts                                    |

### Build Tasks

Build tasks should be run using the following npm scripts:

| Task              | Description                                                               |
|-------------------|---------------------------------------------------------------------------|
| `npm run upgrade` | Upgrade SmartContent CDK package and copy latest files to creative        |
| `npm run dev`     | builds into `dist`                                                        |
| `npm run watch`   | watches `src` folder for changes & builds into `dist`                     |
| `npm run prod`    | cleans `dist` and `zip`, builds for production into `dist` & produces zip |

The gulpfile with this boilerplate should require little modification. This includes one task which 
runs the following operations:

| Operation     | Description                                               | when                  |
|---------------|-----------------------------------------------------------|-----------------------|
| clean         | Deletes contents of `dist` and `zip`                      | dev / prod / clean    |
| copy          | Copy fonts and images                                     | dev / prod            |
| sass          | Compiles `src/sass/main.sass` into `dist/css/main.css`    | dev / prod **         |
| postCss       | Updates CSS URL paths ready for inline-source             | prod                  |
| webpack       | Transpiles `src/js/main.js` into `dist/js/main.js`        | dev / prod **         |
| processHtml   | Replaces template variables                               | dev / prod            |
| processHtml   | Inlines CSS and JS                                        | prod                  |
| zip           | Creates creative ZIP file in `zip`                        | prod / zip            |

** See table below

| Task              | Minifies  | Source maps   | Watches |
|-------------------|-----------|---------------|---------|
| `npm run dev`     | no        | yes           | no      |
| `npm run watch`   | no        | yes           | yes     |
| `npm run prod`    | yes       | no            | no      |           

#### Custom Tasks

Any custom tasks specific to the creative should be defined
`./tasks.js` which is automatically included by the CDK.

## Creative Structure

### HTML

A creative consists of a single `index.html` file which includes one CSS file and one Javascript file:

- `css/main.css`
- `js/main.js`

These files are located in `dist` once a build has completed.

In production the CSS and JS are inlined into `index.html`.

### CSS

The `css/main.css` stylesheet mentioned above is compiled from the `src/sass/main.scss` entrypoint.

The included `scss` file gives you an idea for how you could structure your SASS.

### Javascript

#### Creative Classes

The `js/main.js` script mentioned above is transpiled from the `src/js/main.js` entrypoint. This file
is copied from the SmartContent CDK and should not be edited.

Your ECMAScript 2015 code should begin in `Creative.js` which should extend one of the following
base classes from the SmartContent CDK:
 
| Extend class...       | when creative requires...                                         |
|-----------------------|-------------------------------------------------------------------|
| VueCreative           | Component based templating or CDK components                      |
| JqueryCreative        | Non trivial DOM manipulation                                      | 
| BaseCreative          | Trivial DOM manipulation                                          |

These provide an API with many helper functions needed to build a creative. The source of
each class is well commented so you are advised to take a look at the methods available.

##### Implementing Logic

The provided skeleton `Creative.js` class contains method stubs for the following event handlers,
one of which will be the entry point for the creative logic:

| Event Handler     | Called...                                 |
|-------------------|-------------------------------------------|
| `dataReceived()`  | when all data has been received           |
| `assetsLoaded()`  | when all defined assets have loaded       |
| `start()`         | when creative is shown by player          |

Those handlers not required can be deleted.

##### Accessing data

Within the handlers above data may be accessed using the following methods:

| Method                    | Returns                       | Scope     | File on player                |
|---------------------------|-------------------------------|-----------|------------------------------ |
| `this.dataGetMeta()`      | frame meta data `object`      | Frame     | meta.json.js                  |
| `this.dataGetCampaign()`  | campaign wide data `object`   | Campaign  | campaign-wide-data.json.js    |
| `this.dataGetItems()`     | content items `array`         | Creative  | data.json.js                  |


#### Additional Libraries

The following libraries are preinstalled and available for import:

- [lodash](https://lodash.com)
- [moment.js](http://momentjs.com/)

You may `npm install <package> --save-dev` any additional packages you need, although always bear in mind the file size of the final bundle.
