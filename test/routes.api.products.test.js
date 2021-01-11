const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  productsMock,
  createProduct,
  getProducts,
} = require('../utils/mocks/products');

const testServer = require('../utils/testServer');

describe('routes - api - products', () => {
  const route = proxyquire('../routes/api', {
    '../services/products': {
      createProduct,
      getProducts,
    },
  });
  const request = testServer(route);

  describe('POST /products', () => {
    it('should respond with status 200', (done) => {
      request.post('/api/products').expect(200, done);
    });
  });
});
