class FetchProducts {
  /**
   * Constructor
   * @param { ProductRepository } repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Obtiene los productos
   * @returns { Promise } Resultado de la obtención de toda la información
   * del repositorio
   */
  process() {
    return this.repository.all();
  }
}

/**
 * Al final se exporta la clase
 */
module.exports = FetchProducts;
