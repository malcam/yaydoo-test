const { createDb } = require('../../src/scraper/infrastructure/lib/db');

let services;
module.exports = async function DataBaseConnect(req, res, next) {
  if (!services) {
    try {
      services = await createDb();
    } catch (e) {
      return next(e);
    }
  }
  next();
};
