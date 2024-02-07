![MinMerch](https://github.com/techopus/ShopStop/assets/92953798/228a1587-7d37-4719-802d-558c26a7618d)


There might arise a recurring compaatibility issue with node and npm versions. You might have npm 6.x version installed and node 21.x v installed. So, just make one of it upgraded to compatible version. Here, I just downgrade node version to 10.x(compatible to npm 6.x) using: nvm use 10.

Check node and npm version using: node -v and npm -v , if the versions are compatible before running.

### To intsall all the required dependecies

```
npm install
```

## Start the project

```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test the application

```
npm test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build application

```
npm run build
```

Builds the app for production to the `build` folder.<br>
