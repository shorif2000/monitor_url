This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions

protocol and ports is not supported
basic hostname with no parameters



## Set Up

Clone reository

Start backend api

`cd CLONED/api; npm i; nodemon --exec npm start`

Start front end client

`cd CLONED/client; npmi;`

Update ip address from `52.56.180.211` to appropriate also in client/src/actions/status/index.js as sandox ip was used for testing

`npm run start`


## Test

Some basic tests added on api

`cd CLONED/api; npm test;`

## Demo 

Available here. may not always be online. http://52.56.180.211:3002/

Few limitations on development environment. api can be accessed here https://g1rsn.sse.codesandbox.io



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


