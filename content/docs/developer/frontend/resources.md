---
title: "Frontend Resources"
menu:
    developer:
        parent: "Frontend"
        weight: 20
---

# Recommended Codecademy Courses

These online courses will help you understand the basics of the technologies used in the Virtool client. 


-   [Learn HTML](https://www.codecademy.com/learn/learn-html)
-   [Learn CSS](https://www.codecademy.com/learn/learn-css)
-   [Make a Website](https://www.codecademy.com/learn/make-a-website)
-   [Intro to Javascript](https://www.codecademy.com/learn/introduction-to-javascript)
-   [Learn ReactJS](https://www.codecademy.com/learn/react-101)

# Recommended Reading
The following readings are recommended as they cover libraries that are fundamental to the structure of Virtool's frontend. Understanding them is necessary for
working with large sections of the codebase. 
After reading through the docs you should have a strong conceptual understanding of what each library is for and how to utilize with it. Syntax specifics, while useful, can be cemented while working
on the frontend.
## [React](https://reactjs.org/docs/hello-world.html)

It is not necessary to follow the official React tutorial if you have already completed the Codecademy courses for React.

The current codebase makes use of a combination of class and function based components. While it is important to understand both, new components should use a hook
based solution in the vast majority of cases. When modifying older class based components consider converting the component to a hook based solution
when it improves clarity.

For a detailed look at hooks, including creation of custom hooks, read through the following section:

-   [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

Make sure you understand the following items in the [**ADVANCED GUIDES**](https://reactjs.org/docs/jsx-in-depth.html) section:

- [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [Context](https://reactjs.org/docs/context.html)
- [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- [Fragments](https://reactjs.org/docs/fragments.html)
- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
- [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

## [React-Router](https://v5.reactrouter.com/web/guides/quick-start)

Traditionally, changes in the URL would be associated with visiting a new HTML page requested from the server. 
In single-page applications, rendering of content and communication with the server is done without visiting entirely new pages. 
Since new pages are not visited, the URL does not change while navigating. This is a problem because URLs are useful for allowing users to 
use their built-in browser navigation buttons and use links to specific content.

Many modern Javascript frameworks include URL routing functionality. This allows changes in the application state or appearance to be associated with a change 
in the URL. The React library does not include routing. Instead a separate library called [`react-router`](https://reacttraining.com/react-router/web) is used to enable 
URL based navigation in Virtool.

Relevant documentation sections are:

-   [Examples](https://v5.reactrouter.com/web/example/basic)
-   [API](https://v5.reactrouter.com/web/api/BrowserRouter)
    -   [`BrowserRouter`](https://v5.reactrouter.com/web/api/BrowserRouter)
    -   [`Link`](https://v5.reactrouter.com/web/api/Link)
    -   [`NavLink`](https://v5.reactrouter.com/web/api/NavLink)
    -   [`Redirect`](https://v5.reactrouter.com/web/api/Redirect)
    -   [`Route`](https://v5.reactrouter.com/web/api/Route)
    -   [`Switch`](https://v5.reactrouter.com/web/api/Switch)
    -   [`matchPath`](https://v5.reactrouter.com/web/api/matchPath)

An additional library, [`connected-react-router`](https://github.com/supasate/connected-react-router), syncs the router
state with Redux state. This allows Redux actions to manage the router and the router location and state to be accessible from Redux state.

Relevant FAQ Sections:

-   [How to navigate with Redux action](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action)
-   [How to get the current browser location](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-get-the-current-browser-location-url)

## [Redux](https://redux.js.org/)

Redux is used for state management. Many React components in the Virtool client take state from a central Redux data store. Relevant sections of the Redux docs are:

-   [Introduction](https://redux.js.org/docs/introduction/)
-   [Basics](https://redux.js.org/docs/basics/)
-   [Usage Guide](https://redux.js.org/usage)
    - [Immutable Update Patterns](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns)
    - [Reducing Boilerplate](https://redux.js.org/usage/reducing-boilerplate) \(ignore async action creators\)
    - [Writing Tests](https://redux.js.org/usage/writing-tests) \(ignore async action creators\)
    - [Structuring Reducers](https://redux.js.org/usage/structuring-reducers/structuring-reducers)

## [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

In an effort to standardize and simplify redux logic virtool-ui makes use of redux toolkit for creating actions, reducers, and selectors. Important sections of the redux-toolkit docs are:

 - [createAction](https://redux-toolkit.js.org/api/createAction)
 - [createReducer](https://redux-toolkit.js.org/api/createReducer) (ignore "Map Object" notation, Virtool uses exclusively builder notation)
 - [createSelector](https://redux-toolkit.js.org/api/createSelector)


## [Redux-Saga](https://redux-saga.js.org/)

Redux is not well-suited to handling data asynchronously (eg. AJAX) by itself. There is Redux middleware available for dealing with this problem. We use Redux-Saga. Redux-Saga uses ES6 generators (read about them [here](https://goshakkk.name/javascript-generators-understanding-sample-use-cases/)). Relevant sections of the docs are:

- [Introduction](https://redux-saga.js.org/docs/introduction/GettingStarted)
    -   [Beginner Tutorial](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [Basic Concepts](https://redux-saga.js.org/docs/basics/DeclarativeEffects)
- Advanced Concepts
    - [Channels](https://redux-saga.js.org/docs/advanced/Channels)
    - [Running tasks in parallel](https://redux-saga.js.org/docs/advanced/RunningTasksInParallel.html)
    

## [Jest](https://jestjs.io/)

Jest is the testing framework used for Virtool's frontend. Relevant sections of the docs are:

-   Introduction
    -   [Getting Started](https://jestjs.io/docs/en/getting-started)
    -   [Using Matchers](https://jestjs.io/docs/en/using-matchers)
    -   [Setup and Teardown](https://jestjs.io/docs/en/setup-teardown)
    -   [Mock Functions](https://jestjs.io/docs/en/mock-functions)
-   Guides
    -   [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)
    -   [Manual Mocks](https://jestjs.io/docs/en/manual-mocks)
    -   [Bypassing Module Mocks](https://jestjs.io/docs/en/bypassing-module-mocks)

There is also documentation describing basic testing of Virtool-ui [here](https://www.virtool.ca/docs/developer/frontend/testing/).



## [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

React Testing Library (RTL) is used in conjunction with Jest to create the best practices testing platform used for Virtool's frontend. The utilities provided for testing page functionality
focus on interacting with the page as a real user would. All tests written for Virtool using RTL render the full dom tree below the tested component. Relevant documentation for writing/reading tests:

- [Queries](https://testing-library.com/docs/queries/about) (Targeting elements within the dom)
- [User Action](https://testing-library.com/docs/dom-testing-library/api-events) (Simulating user interaction with the page)
- [Async Action](https://testing-library.com/docs/dom-testing-library/api-async) (Useful when interacting with any async components, including most forms)
- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet) (Useful quick reference)

# Additional Reading

The following readings cover topics that are important for having a complete understanding of the frontend's tech stack, but detailed comprehension is not required
for most frontend work. Reading through them is still recommended.

## [Webpack](https://webpack.js.org/)

Webpack is used to turn the client source files into single bundled Javascript, CSS, and HTML assets for download by the browser. Relevant sections of the docs are:

-   [Concepts](https://webpack.js.org/concepts/)
-   [Loaders](https://webpack.js.org/concepts/loaders/)
-   [Plugins](https://webpack.js.org/concepts/plugins/)
-   [Configuration](https://webpack.js.org/concepts/configuration/)

## [SuperAgent](<(https://visionmedia.github.io/superagent/)>)

Web applications typically communicate between the web browser and the server via HTTP requests and responses. Basic information can be found here:

- [HTTP Request Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) 
- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP Response Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

SuperAgent is a client side [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) HTTP request library that is used to request data from Virtool's API.

-   [Basics](https://visionmedia.github.io/superagent/#request-basics)

Some aspects of the Virtool's Redux data store are determined by server event-driven responses.

-   [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)



## [Enzyme](https://enzymejs.github.io/enzyme/)

Enzyme is a testing utility that helps test, traverse, simulate events, and format output for React components. Enzyme
is not currently expected to support future version of react, so tests should be updated from Enzyme to react testing library as they are modified.

-   [Basic Usage](https://enzymejs.github.io/enzyme/#basic-usage)
-   [API](https://enzymejs.github.io/enzyme/docs/api/)
