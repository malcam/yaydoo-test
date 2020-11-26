const { createDb } = require('../lib/db');

let services;
module.exports = async function DataBaseConnect(req, res, next) {
    if (!services) {        
        try {
            services = await new createDb();
        } catch (e) {
            return next(e);
        }
    }
    next();
};
