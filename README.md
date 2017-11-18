Install modules with 

`npm install`

To run tests, lint, and server:

`npm run start`

Alternatively, run each of these individually with:

`npm run test`
`npm run lint`
`npm run dev`

#Design Choices

This project is supported by full tooling with webpack, es6, mocha tests, 
and eslint. 

The backbone of the app is written with React and Redux using the "ducks" 
architecture pattern - I've found it to be a simple way of approaching Redux
apps that keeps closely related concerns simple to navigate between. 

On the frontend, this app uses React-Virtualized to render fewer country
options at once - items only exist in the DOM when you scroll to them. I also
added a filter to enable searching for countries by either country code or 
name. 
