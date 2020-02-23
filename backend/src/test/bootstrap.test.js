const supertest = require('supertest');
const dotenv = require('dotenv');

const { setup } = require('../src/sql');

process.env.NODE_ENV = 'test'; // just in case if test started by `mocha`
/* Load config from .env file at very beginning of app */
dotenv.config();

const { start, lower} = require('../app');

const request = supertest(require('../app').default);

before(done => {
  start(() => {
    global.request = request;
    done();
  });
});

after(done => {
  lower(done);
});
