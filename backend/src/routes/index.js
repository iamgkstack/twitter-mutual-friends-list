const express = require('express');
const health = require('./health');
const twitter = require('./twitter');

const supportedMethods = ['get'];

const configureRouter = (app, routes = []) => {
  const { prefix } = config;
  const router = express.Router();
  routes.forEach(route => {
    const method = route.method.toLowerCase();
    const version = route.version || 'v1';

    /* Check if method is supported */
    if (!supportedMethods.includes(method)) {
      throw new Error({
        message: `Method ${method} is not supported`
      });
    }

    router[method].apply(router, [`/${version}/${route.path}`, route.action]);
    /* Use default prefix from config if router doesn't provide one */
    app.use(`${route.prefix || prefix}`, router);
  });
};

module.exports = app => {
  configureRouter(app, health);
  configureRouter(app, twitter);
};
