---
title: "Frontend Guide"
menu:
    developer:
        parent: "Frontend"
        weight: 10
---

# Key Technologies

-   React (`react`, `react-dom`)
-   Redux (`redux`)
    Redux is a state container that integrates well with React
    `redux-saga`
-   React Router (react-router-dom)

# Structure

For the most part, Virtool client source code is [organized by feature](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes). Most feature folders will have the following files or directories:

### `components` directory

All components associated with the feature. May contain additional nested directories. |

### `reducers.js` module

Reducers and possibly some initial state values or helper functions.

### `selectors.js` module

Selector functions for deriving values from the state object.

### `actions.js` module

Redux action creators for the feature. |

### `api.js`

Functions for making and handling requests to the Virtool JSON API. Uses `superagent` as HTTP client library.

### `sagas.js`

Saga code for the feature. Contains watch setup for handling actions (eg. `watchSamples`) and defines generator functions for handling asynchronous activity. Most of the saga code is for dealing with API requests.

### `utils.js`

Miscellaneous utility functions for the feature.

### `app` module

Contains submodules related to app initializiation and whole-application functionality.

### `base` module

Common base components for reuse in user interface.

### `index.js``

Webpack entry point.

### `nonce.js`

Sets a `__webpack_nonce__` value based on a value passed in from the server via `index.html.`

### `utils` module

Contains reusable utility functions for the following:

-   reducers
-   inserting, updating, or removing documents locally based on websocket messages
-   extending and updating a local document list based on a find or list request
