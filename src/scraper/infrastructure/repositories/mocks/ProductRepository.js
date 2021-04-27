const RealRepository = require('../sqlite/ProductRepository');

/**
 * Clase en la que hereda de RealRepository (polimorfismo)
 * @constructor
 */
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
