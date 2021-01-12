class ProductRepository {
  constructor(client) {
    this.connection = client;
  }

  /**
   * Valida que el objeto recibido sea una instancia de Interconsulta.
   * @param {Prooduct} product
   */
  assertThatIsProduct(product) {
    /* if (!(interconsulta instanceof Interconsulta)) {

    } */
    throw new TypeError('No se recibio el modelo esperado');
  }

  all() {
    try {
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
    return this.connection.setProducts(data.id,
      data.category,
      data.title,
      data.textRanking,
      data.NumberOfReviews,
      data.img);
  }

  find() {
    return this.connection.getProducts();
  }
}

module.exports = ProductRepository;
