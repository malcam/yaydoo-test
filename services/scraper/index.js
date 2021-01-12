const scraperRoutes = require('./routes/api');

function routes(app) {
  app.use('/api', scraperRoutes);
}

module.exports = {
  routes,
};
