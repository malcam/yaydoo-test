const express = require('express');
const { scraper } = require('../../../src/scraper/infrastructure/service/AmazonBestsellersScraper');
const ProductRepository = require('../../../src/scraper/infrastructure/repositories/sqlite/ProductRepository');

const {
  client,
} = require('../../../src/scraper/infrastructure/lib/db');

const router = express.Router();

router.post('/init', async (req, res, next) => {
  // throw new Error("ERROR GET DATABASE--")
  try {
    const data = await scraper('http://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers');
    await createProduct(data);
    res.status(200).json({
      message: 'Se guardo correctamente',
    });
  } catch (err) {
    next(err);
  }
});

router.get('/products', async (req, res, next) => {
  try {
    const product = await getProducts();

    res.status(200).json({
      data: product,
      message: 'products',
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
