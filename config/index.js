require('dotenv').config();

/**
 * Configuración del puerto acorde al archivo .env
 * @type {{dev: boolean, port: number}}
 */
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
};

module.exports = { config };
