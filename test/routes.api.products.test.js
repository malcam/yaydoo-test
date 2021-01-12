const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  productsMock,
  createProduct,
  getProducts,
} = require('../src/scraper/infrastructure/repositories/mocks/ProductRepository');

const testServer = require('../utils/testServer');

describe('routes - api - products', () => {
  const route = proxyquire('../routes/api', {
    '../services/products': {
      createProduct,
      getProducts,
    },
  });
  const request = testServer(route);

  describe('GET /products', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/products').expect(200, done);
    });
  });
});
