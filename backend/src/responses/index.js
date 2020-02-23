const badRequest = require('./badRequest');
const notFound = require('./notFound');
const ok = require('./ok');
const serverError = require('./serverError');

module.exports = (req, res, next) => {
  res.badRequest = badRequest(res);
  res.ok = ok(res);
  res.serverError = serverError(res);
  res.notFound = notFound(res);
  next();
};
