# Très Petite LLC Website

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

## Deployment to GitHub Pages

Follow these steps to deploy updates to GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. Copy build files to root directory:
```bash
cp -r build/* .
```

3. Commit the changes:
```bash
git add .
git commit -m "Deploy: [description of changes]"
git push origin main
```

The site will be automatically updated at your GitHub Pages URL.

**Note:** Always make sure to copy the build files to the root directory after building. This is required for GitHub Pages to serve the latest version of your site.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).