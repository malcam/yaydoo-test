const { createDb } = require('../../lib/db');

class ProductRepository {
  constructor(connection) {
    this.connection = connection;
  }

  all() {
    try {
      // const services = await createDb();
      return this.connection.getProducts();
    } catch (error) {
      console.error('error getProducts ', error);
      return Promise.reject(error);
    }
  }

  /**
   * Persist a product.
   * @param {product} product
   */
  create(product) {
    // assertThatIsProduct(product);

    try {
      const id = JSON.parse(product.id) ? JSON.parse(product.id).asin : Math.random();
      return this.connection.setProducts(id,
        product.category,
        product.title,
        product.textRanking,
        product.NumberOfReviews,
        product.img);
    } catch (error) {
      console.error('error createProduct ', error);
      return Promise.reject(error);
    }
  }

  async createProduct(product) {
    try {
      // const services = await createDb();
      product.map(async (item) => {
        const id = JSON.parse(item.id) ? JSON.parse(item.id).asin : Math.random();
        await this.connection.setProducts(id,
          item.category,
          item.title,
          item.textRanking,
          item.NumberOfReviews,
          item.img);
      });
    } catch (error) {
      console.error('error createProduct ', error);
      return error;
    }
  }

  async getProducts() {
    try {
      // const services = await createDb();
      return await this.connection.getProducts();
    } catch (error) {
      console.error('error getProducts ', error);
      return error;
    }
  }
}

module.exports = ProductRepository;
