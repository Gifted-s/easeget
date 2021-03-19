# Easeget
The server-side for the ease-get mobile app

[

## Features
* XSS Protection (via [sanitize-html](https://www.npmjs.com/package/sanitize-html))


## Running Locally

#### Prerequisites
* [Git](https://git-scm.com/downloads)
* [Node JS](https://nodejs.org/en/)
* [Mongo DB](https://www.mongodb.com)
* [Vonyage Account](https://www.vonage.com)

#### 1. Clone the repo and install dependencies
```bash
git clone 
cd easeget
npm i
```

#### 2. Modify the .env file
Save `sampledotenv` as `.env` 
```
e.g

EG_API_ROOT=/egapi/v1
MONGODB_URL=mongodb://127.0.0.1:27017
DEVPORT=3000
GMAIL_USER=test@gmail.com
GMAIL_PASS=testpassword
VONYAGE_API_KEY=hjgghhj
VONYAGE_API_SECRET=7bghjghjhjghj

```

#### 3. Startup your MongoDB
Usually this is just: `mongod` on the command line.

#### 4. Start the server
To run in production mode where code is transpiled by Babel into a `dist` folder and run directly in `node`:
```bash
npm start
```

To run in development mode where code is run by [babel-node](https://babeljs.io/docs/en/babel-node) via [nodemon](https://nodemon.io) and re-transpiled any time there is a change:
```bash
npm run dev
```
