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

  /**
   * Función sobrecargada
   * @param {object} data
   * @returns object Objeto de respuesta al objeto data
   */
  persist(data) {
    return this.response.persist(data);
  }

  /**
   * Busqueda de información
   * @returns object Devuelve un objeto con el resultado de la b
   */
  find() {
    return this.response.find();
  }
}

module.exports = ProductRepository;
