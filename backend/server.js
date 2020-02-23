const dotenv = require('dotenv');

/* Load config from .env file at very beginning of app */
if (process.env.NODE_ENV !== 'production') dotenv.config();

const app = require('./app');

app.start();
