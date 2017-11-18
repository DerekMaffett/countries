# Getting Started

Install modules with:

`npm install`

To run tests, lint, and server:

`npm run start`

Alternatively, run each of these individually with:

`npm run test`

`npm run lint`

`npm run dev`

# Design Choices

This project is supported by full tooling with webpack, es6, mocha tests,
and eslint. 

The backbone of the app is written with React and Redux using the [ducks
architecture][ducks architecture] pattern - I've found it to be a simple
way of approaching Redux
apps that keeps closely related concerns simple to navigate between.

On the frontend, this app uses [React-Virtualized][React-Virtualized]
to render fewer country options at once - items only exist in the DOM when
you scroll to them. I also added a filter to enable searching for countries by
either country code or name.

## Known Issues

1. I would prefer to use the [CSS Modules][CSS Modules] pattern in its entirety
but I was having trouble getting the css loader for webpack to work as
suggested in its documentation. This may be a current problem in its version,
but I decided to leave it alone for this project and instead explicitly
scope each css class to the React components that use them instead.

2. There is a very slight problem with the border alignment
between the search box and the rest of the countries list. This is partially
related to React-Virtualized. I would fix it in a production app, but as
I am not a professional designer by any means, realistically I would wait
for designer input before trying to fix such a small problem.

[ducks architecture]: https://github.com/erikras/ducks-modular-redux
[React-Virtualized]: https://github.com/bvaughn/react-virtualized
[CSS Modules]: https://github.com/css-modules/css-modules
