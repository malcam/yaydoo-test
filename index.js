//Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const boom = require('boom');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const scraperRoutes = require('./services/scraper');
const DataBaseConnect = require('./utils/middlewares/dataBaseConnect');
// const Api = require('./services/scraper/routes/api');
const { config } = require('./config/index');

//Assets
const {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler,
} = require('./utils/middlewares/errorsHandlers');
const isRequestAjaxOrApi = require('./utils/isRequestAjaxOrApi');

// app
const app = express();
// app.use('*', DataBaseConnect);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// middlewares
app.use(bodyParser.json());

// routes
// TODO: Add routes as middleware
scraperRoutes.routes(app);

app.use((req, res, next) => {
  if (isRequestAjaxOrApi(req)) {
    const {
      output: { statusCode, payload },
    } = boom.notFound();

    res.status(statusCode).json(payload);
  }

  res.status(404).json({ error: '404' });
});

// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// server
const server = app.listen(config.port, () => {
  console.log(`Listening http://localhost:${server.address().port}`);
});
