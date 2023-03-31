## HOW-TO: Setup Node.js Express server from scratch

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

#### 3. Create .babelrc file
```
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        [ "@babel/plugin-transform-runtime", {
            "regenerator": true
        }]
    ]
}
```

#### 4. Start server
```
npx babel-node src/server.js
```

#### 5. Install nodemon to automatically restart the server on files change
```
npm install --save-dev nodemon
```

## Run dev server

#### Start server using nodemon
```
npx nodemon --exec npx babel-node src/server.js
```

#### or add alias to package.json
```
"scripts": {
    "dev": "npx nodemon --exec npx babel-node src/server.js",
}
```

#### and use it
```
npm run dev
```
