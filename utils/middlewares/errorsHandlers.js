const boom = require('boom');
const { config } = require('../../config');
const isRequestAjaxOrApi = require('../isRequestAjaxOrApi');

function withErrorStack(err, stack) {
  return (config.dev ? { ...err, stack } : null);
}

function logErrors(err, req, res, next) {
  console.log(err.stack);
  next(err);
}

function wrapErrors(err, req, res, next) {
  next((!err.isBoom)
    ? boom.badImplementation(err) : err);
}

function clientErrorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;

  // catch errors for AJAX request or if an error ocurrs while streaming
  if (isRequestAjaxOrApi(req) || res.headersSent) {
    res.status(statusCode).json(withErrorStack(payload, err.stack));
  } else {
    next(err);
  }
}

function errorHandler(err, req, res) {
  const {
    output: { statusCode },
  } = err;

  res.status(statusCode || 500);
  res.json({
    message: err.message,
    error: err,
  });
}

module.exports = {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler,
};
