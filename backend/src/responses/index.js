const badRequest = require('./badRequest');
const created = require('./created');
const forbidden = require('./forbidden');
const negotiate = require('./negotiate');
const noContent = require('./noContent');
const notFound = require('./notFound');
const ok = require('./ok');
const serverError = require('./serverError');
const unAuthorized = require('./unAuthorized');

module.exports = (req, res, next) => {
  res.badRequest = badRequest(res);
  res.ok = ok(res);
  res.created = created(res);
  res.serverError = serverError(res);
  res.negotiate = negotiate(res);
  res.notFound = notFound(res);
  res.noContent = noContent(res);
  res.unAuthorized = unAuthorized(res);
  res.forbidden = forbidden(res);
  next();
};
