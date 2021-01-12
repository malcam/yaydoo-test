const express = require('express');
const AmazonBestsellersScraper = require('../../../src/scraper/infrastructure/service/AmazonBestsellersScraper');
const ProductRepository = require('../../../src/scraper/infrastructure/repositories/sqlite/ProductRepository');
const { FetchProducts, CreateProducts } = require('../../../src/scraper/application/index');

const client = require('../../../src/scraper/infrastructure/lib/db');

const router = express.Router();

router.post('/init', async (req, res, next) => {
  // throw new Error("ERROR GET DATABASE--")
  try {
    const scraperService = new AmazonBestsellersScraper('http://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers');

    const repository = new ProductRepository((await client.createDb()).getClient());
    const service = new CreateProducts(repository, scraperService);
    await service.process();

    res.status(200).json({
      message: 'Se guardo correctamente',
    });
  } catch (err) {
    next(err);
  }
});

router.get('/products', async (req, res, next) => {
  try {
    const repository = new ProductRepository((await client.createDb()).getClient());
    const service = new FetchProducts(repository);
    const products = await service.process();

    res.status(200).json({
      data: products,
      message: 'products',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
