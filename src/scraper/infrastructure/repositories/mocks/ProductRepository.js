const RealRepository = require('../sqlite/ProductRepository');

class ProductRepository extends RealRepository {
  constructor(client, response) {
    super(client);
    this.response = response;
  }

  persist(data) {
    return Promise.resolve(this.response.persist);
  }

  find() {
    return Promise.resolve(this.response.find);
  }
}

module.exports = ProductRepository;
