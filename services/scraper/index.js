const scraperRoutes = require('./routes/api');

/**
 * Función para generar las funciones acorde al metodo
 * @param {object} app Recibe como parametro un objeto del tipo Express
 */
function routes(app) {
  app.use('/api', scraperRoutes);
}

/**
 * Exporta la función
 */
module.exports = {
  routes,
};
