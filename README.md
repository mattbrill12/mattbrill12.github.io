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

### Automated Deployment (Recommended)

The project includes automated CI/CD using GitHub Actions. **Simply push your code changes to the `main` branch** and the workflow will automatically:
1. Build the project
2. Deploy build files to the `gh-pages` branch
3. GitHub Pages serves from the `gh-pages` branch

**Workflow:**
```bash
# 1. Make your code changes
git add .
git commit -m "Your commit message"
git push origin main

# 2. GitHub Actions automatically handles:
#    - Building the project
#    - Deploying build files to gh-pages branch
#    - Your main branch stays clean (no deployment commits!)
```

**Manual Deployment (Local):**

If you prefer to deploy manually from your local machine:

```bash
npm run deploy:root
```

This single command will:
1. Build the project (`npm run build`)
2. Copy build files to root directory (`npm run copy-build`)
3. Commit and push changes (`npm run commit-deploy`)

**Individual Steps (if needed):**

```bash
# Build the project
npm run build

# Copy build files to root
npm run copy-build

# Commit and push (optional, if you want to review changes first)
npm run commit-deploy
```

The site will be automatically updated at your GitHub Pages URL.

**Note:** 
- The GitHub Actions workflow automatically deploys to the `gh-pages` branch on every push to `main`
- Your `main` branch stays clean - no deployment commits!
- Make sure GitHub Pages is configured to serve from the `gh-pages` branch (Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` → Folder: `/ (root)`)
- For local manual deployments, use `npm run deploy:root` (this still deploys to root, but you can update it to use gh-pages if preferred)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).