class FetchProducts {
  /**
   * Constructor
   * @param { ProductRepository } repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Get all products
   * @returns { Promise }
   */
  process() {
    return this.repository.all();
  }
}

module.exports = FetchProducts;
