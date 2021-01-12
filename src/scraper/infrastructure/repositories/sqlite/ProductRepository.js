class ProductRepository {
  constructor(client) {
    this.client = client;
  }

  /**
   * Validate that the received object is from the expected instance.
   * @param {Product} product
   */
  assertThatIsProduct(product) {
    /* if (!(interconsulta instanceof Interconsulta)) {

    } */
    throw new TypeError('No valid instance');
  }

  all() {
    try {
      // TODO: Adapt results to domain models
      return this.find();
    } catch (error) {
      console.error('error get products ', error);
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
      const productDTO = { ...product };
      // TODO: Move to Adapter
      productDTO.id = JSON.parse(product.id) ? JSON.parse(product.id).asin : Math.random();
      return this.persist(productDTO);
    } catch (error) {
      console.error('error create product ', error);
      throw error;
    }
  }

  persist(data) {
    return new Promise((resolve, reject) => {
      const stmt = this.client.prepare('INSERT INTO products VALUES ( ?, ?, ?, ?, ?, ?);');
      stmt.run(data.id, data.category, data.title, data.textRanking, data.NumberOfReviews, data.img);
      stmt.finalize((err) => (err ? reject(err) : resolve()));
    });
  }

  find() {
    return new Promise((resolve, reject) => {
      const products = [];
      this.client.each('SELECT * FROM products;', (err, row) => {
        if (err) return reject(err);
        products.push(row);
      }, (err, count) => (err ? reject(err) : resolve({ count, products })));
    });
  }
}

module.exports = ProductRepository;
