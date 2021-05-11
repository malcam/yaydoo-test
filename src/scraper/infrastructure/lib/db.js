const path = require('path');
const { Database } = require('sqlite3').verbose();

const client = new Database(path.join(__dirname, '..', 'secrets.db'));
const queries = {
  tableProducts: `
      CREATE TABLE IF NOT EXISTS products (
          id TEXT,
          category TEXT NULL,
          title TEXT,                  
          rank TEXT,
          NumberOfReviews TEXT,
          img TEXT     
      )
    `,
};

/** Para la creación de la base de datos en caso de que no exista */
async function createDb() {
  return new Promise((resolve, reject) => {
    client.serialize(() => {
      client.run(queries.tableProducts, (err) => {
        if (err) return reject(err);
        return resolve({
          getClient: () => client,
        });
      });
    });
  });
}

/**
 * Al final se exporta la función para crear la base de datos
 */
module.exports = {
  createDb,
};
