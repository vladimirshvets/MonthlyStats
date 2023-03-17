####
```
mkdir backend
cd ../backend
```

#### 1. Install express server
```
npm init -y
npm install express
```

#### 2. Add babel libraries
```
npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/cli @babel/plugin-transform-runtime
npm install @babel/runtime
```

#### Create .babelrc file

#### 3. Start server
npx babel-node src/server.js

#### 4. Install nodemon to automatically restart the server on files change
npm install --save-dev nodemon

#### Start server using nodemon
npx nodemon --exec npx babel-node src/server.js

#### Or use alias from package.json
npm run server-run

