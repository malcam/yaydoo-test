const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const boom = require("boom");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const DataBaseConnect = require("./routes/dataBaseConnect")
const Api = require("./routes/api");
const { config } = require('./config/index');

const {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler
} = require("./utils/middlewares/errorsHandlers");

const isRequestAjaxOrApi = require("./utils/isRequestAjaxOrApi");
// app
const app = express();
//app.use('*', DataBaseConnect);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// middlewares
app.use(bodyParser.json());
// routes

Api(app);

app.use(function(req, res, next) {
  if (isRequestAjaxOrApi(req)) {
    const {
      output: { statusCode, payload }
    } = boom.notFound();

    res.status(statusCode).json(payload);
  }

  res.status(404).render("404");
});

// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// server
const server = app.listen(config.port, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
