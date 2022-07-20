## Submission Notes

* Created the Table and Header components to function as described in the requirements listed in Notes.md

* React is the only library used for the project as the requirements requested minimal support. React with CRA, was chosen to speed up the time I could allocate to implementing the requested featues. Although React is not used by your company, similar coding practices exists across both. 

* CSS is located in the index.css file. Minimal CSS was needed for this project so it is all contained in a single file.

* Components were created to allow for easier additions and changes.

* State is managed at different levels of components, event handlers are implemented in the components they are used within, and state lifted through callbacks.

* I mocked a Promise to make the data request look more realistic, added notes around that in dashboard.jsx. It is easier to add in a btn or similar for fetching data now.

* Minimal TypeScript used. Short timeline project so only the response data has an Interface.

* Added a few tests around rendering the dashboard as a whole and the Header component. Again, short timeline project so displaying basic functionality there that can be extended later.

* Code syntax formatting was applied with the VS Code built-in formatter "Prettier".


### Included below are the provided notes on running a CRA project

----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

