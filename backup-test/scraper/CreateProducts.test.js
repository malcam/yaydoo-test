if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ silent: true });
}

const {
  CreateProducts,
} = require('../../src/scraper/application/index');

const Product = require('../../src/scraper/domain/model/Product');
const ProductRepository = require('../../src/scraper/infrastructure/repositories/mocks/ProductRepository');
const AmazonBestsellersScraper = require('../../src/scraper/infrastructure/service/AmazonBestsellersScraper');

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
  const scraperService = new AmazonBestsellersScraper('http://www.amazon.com.mx/gp/bestsellers/?ref_=nav_cs_bestsellers');

  const repository = new ProductRepository(null, response);
  const service = new CreateProducts(repository, scraperService);

  return service.process();
}

test('Create products list', () => {
  expect(main({
    persist: () => Promise.resolve(true),
  })).resolves.toMatchObject(true);
});

test('Fail Create product list', () => {
  expect(main({
    persist: (data) => { throw new Error('The information could not be saved'); },
  })).rejects.toThrow('The information could not be saved');
});
