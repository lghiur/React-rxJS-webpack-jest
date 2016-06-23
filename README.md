TO DO LIST (rxJS, React, Webpack, Karma, Jasmine)

Before starting, make sure you have the following:

 1. NodeJs (https://nodejs.org/en/)- because of the development environment that needs a Node server
 2. Ruby for SASS(https://www.ruby-lang.org/en/documentation/installation/)

Features
--------

These are libraries/frameworks that I've used for this application.

 1. Babel (ES6, JSX)(https://babeljs.io/)
   I like to take advantage of the ES6 features, and because not all browsers don't support them yet,
   I've used the Babel transpiler as a loader of Webpack.

 2. React(https://facebook.github.io/react/)
   Even if React has been built for large applications with data that changes over time, I believe that it helps us to modularize better
   the applications, it takes care just of the views and for that data logic we can use whatever framework or architecture we want (Flux, MVVM, MVC)

  Also it works really well with Flux(https://facebook.github.io/flux/docs/overview.html) architecture,
   which uses unidirectional data flow and has short learning curve.

 3. Stampit (https://github.com/stampit-org/stampit)
   Because I prefer to take full advantage of the Javascript features such as Prototype inheritance
   (for creating composable and reusable modules) but I also want to get rid of all the boilerplate code for using that,
   I have chosen a simple and lightweight library called Stampit

 4. Jest, as testing framework. Very easy to use because of it's compatibility and react, and also uses Jasmine assertions which are well known.

 5. Webpack and Webpac-dev-server(https://webpack.github.io/)
   With Webpack and its dev server companion, I got bundle splitting, cache busting, hot module replacement and even the ability
   to require non-JS assets such as sass files.

 6. Gulp (http://gulpjs.com/)
   It's true that I've used Webpack already for bundling javascript, transpiling Es6 code to ES5 and even for the dev server,
   but gulp helped me to take care of the rest of the stuff like: running tests and running the mock server

 7. Node-mock-server(https://www.npmjs.com/package/node-mock-server)
   I have mocked all the requests using node-mock-server which is really helpful;

Installation and usage
----------------------

Before installing all the requirements, make sure that your are in the root of the project;

1)  Install all the npm packages by running

```````````
npm install
```````````  
2) Start the mock server in a cmd window

``````````````````````
gulp start-mock-server
``````````````````````

3) Start webpack server in another cmd window, and access in browser 'http://localhost:3000'
``````````````````
webpack-dev-server
``````````````````

4) Run the tests

`````````
gulp test
`````````

5) When writing tests, use the following command. This will keep the server open and will run just the tests that have been modified;
`````````
gulp tdd
`````````

6) For generating the code for production, just run:

````````````````````
webpack --production
````````````````````

Folder structure
----------------

I've created an intuitive folder structure, where implemented functionality is easy to find and permits easy creation of reusable components.

  |-- app // entire code of the application

  |&nbsp;&nbsp;&nbsp;&nbsp;|-- common // common parts of the application: sass, javascript, components

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- tests // support functions for running the TDD tests

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- fonts // all the fonts of the application

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- sass // some common styles of the application: theme, layout, reset, variables, colors etc.

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- components // common components, that are reusable across the application

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- comp 1 // this should be a reusable component, that contains a standard folder structure

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- js // javascript code needed only for "comp 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- sass // sass code needed only for "comp 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- images // images used only by "com 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- tests // all tdd tests needed for "comp 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- mocks // all json mocks used by "comp 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- components // all subcomponents used only by "comp 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- comp 1.1 // a subcomponent used only by "comp 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- .. // other components

  |&nbsp;&nbsp;&nbsp;&nbsp;|-- pages // all pages structure of the application

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- page 1 // a specific page of the application (ex: home, dashboard, etc.)

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- js // javascript code just for "page 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- sass // sass code just for "page 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- images // images used only on "page 1" or its sub-pages

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- tests // unit tests for "page 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- mocks // all json mocks needed for "page 1" or its sub-pages

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- components // specific components used only on "page 1" or its sub-pages

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- page 1.1 // a sub-page of "page 1"

  |&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|-- .. // other pages

  |-- build // all the minified javascript and css code and all optimized images

  |-- coverage // coverage reports on the unit tests

  |-- mock-server // JSON-API server

  |-- node_modules // all node packages used in this project

  |-- gulp // gulp tasks
