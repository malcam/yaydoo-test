class CreateProducts {
  /**
   * Constructor
   * @param { ProductRepository } repository
   * @param { AmazonBestsellersScraper } scraperService
   */
  constructor(repository, scraperService) {
    this.repository = repository;
    this.scraperService = scraperService;
  }

  /**
   * Get all products
   * @returns { Promise }
   */
  async process() {
    // TODO: Move to constructor argument
    const data = await this.scraperService.process();

    return Promise.resolve(data.map(async (item) => {
      // TODO: Fix know issue, internal error does not stop the loop
      await this.repository.create(item);
    }));
  }
}

module.exports = CreateProducts;
