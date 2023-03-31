# Monthly Stats

A full-stack Node.js app (Vue frontend, Express backend, MongoDB storage).

## HOW-TO: Setup

#### 1. Create .env file from .env.sample
```
MONGODB_CONNECTION=...
```

#### 2. Run express server
```
cd ./backend
npm run dev
```

#### 3. Specify proxy server for client app in ./client/vue.config.js
```
devServer: {
    proxy: 'http://localhost:8000'
}
```

#### 4. Run client app
```
cd ./client
npm run serve
```

#### 5. Open website in browser
http://localhost:8080

## HOW-TO: Deployment

#### 1. Build client app for production and copy output (dist folder) to backend
```
cd ./backend
rm -rf dist
cd ../client
npm run build
cp -r dist/ ../backend
```

#### 2. Specify static content in express (server.js)
```
app.use(express.static(
    path.resolve(
        __dirname, '../dist'),
        { maxAge: '1y', etag: false }
    )
);
```
Frontend and backend are hosted on single server now.

#### 3. Open website in browser
http://localhost:8000
