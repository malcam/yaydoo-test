const RealRepository = require('../sqlite/ProductRepository');

class ProductRepository extends RealRepository {
  constructor(client, response) {
    super(client);
    this.response = response;
  }

  persist(data) {
    return this.response.persist(data);
  }

  find() {
    return this.response.find();
  }
}

module.exports = ProductRepository;
