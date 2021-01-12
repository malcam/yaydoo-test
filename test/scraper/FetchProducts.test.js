if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ silent: true });
}

const {
  FetchProducts,
} = require('../../src/scraper/application/index');

const Product = require('../../src/scraper/domain/model/Product');
const ProductRepository = require('../../src/scraper/infrastructure/repositories/mocks/ProductRepository');

function makeProductList() {
  const product = new Product();
  product.id = '1';
  product.category = 'libros';
  product.position = '1';
  product.title = 'title';
  product.numberOfReviews = '123';
  product.textRanking = '1 de 5';
  product.img = 'https://www.example.com';

  return [product];
}

function main(response) {
  const repository = new ProductRepository(null, response);
  const service = new FetchProducts(repository);

  return service.process();
}

test('Try fetch all products', () => {
  expect(main({
    find: makeProductList(),
  })).resolves.toMatchObject(makeProductList());
});

test('Fail to try fetch all products', () => {
  expect(main({
    find: null,
  })).rejects.toThrow('No se recibio el modelo esperado');
});
