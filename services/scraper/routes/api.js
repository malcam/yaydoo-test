// Dependencies
const express = require('express');

// Assets
const AmazonBestsellersScraper = require('../../../src/scraper/infrastructure/service/AmazonBestsellersScraper');
const ProductRepository = require('../../../src/scraper/infrastructure/repositories/sqlite/ProductRepository');
const { FetchProducts, CreateProducts } = require('../../../src/scraper/application/index');
const client = require('../../../src/scraper/infrastructure/lib/db');

// Router
const router = express.Router();

/**
 * Se define la ruta la cual va a inicializar la base de datos
 * con contenido respectivo al catalogo de Amazon bajo la categoría
 * de Best Seller.
 * Esto bajo una función anonima asincrona.
 */
router.post('/init', async (req, res, next) => {
  try {
    const repository = new ProductRepository((await client.createDb()).getClient());
    const scraperService = new AmazonBestsellersScraper('http://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers');
    const service = new CreateProducts(repository, scraperService);
    await service.process();

    res.status(201).json({
      message: 'Database was initialized successfully!',
    });
  } catch (err) {
    next(err);
  }
});

/**
 * Se define la ruta la cual va a obtener de la base de datos
 * el contenido respectivo al catalogo de Amazon bajo la categoría
 * de Best Seller.
 * En caso de que el resultado sea una lista vacía, devuelve error 500
 * Esto bajo una función anonima asincrona.
 */
router.get('/products', async (req, res, next) => {
  try {
    const repository = new ProductRepository((await client.createDb()).getClient());
    const service = new FetchProducts(repository);
    const products = await service.process();

    if (!products.products.length) {
      res.status(500).json({
        message: 'The list are empty, ensure your database was initialized '
          + '(with endpoint /api/init) and try again',
        code: 500,
      });
    } else {
      res.status(200).json({
        data: products,
        message: 'products',
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
