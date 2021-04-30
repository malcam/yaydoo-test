/**
 * Clase en la que adapta las consultas para manejar en SQLite3
 */
class Adapter {
  constructor() {
  }
  /**
   * Obtención de categorias (por medio de la variable encapsulada category)
   * @param {string} $review recibe un query para hacer la consulta respectiva
   * en la base de datos
   * @returns {string} resultado de la consulta de la base de datos
   */
  getCategory($review) {
    const element = $review.querySelector('h3');
    return element ? element.textContent : '';
  }

  /**
   * Obtención de posiciones (por medio de la variable encapsulada position)
   * @param {string} $item recibe un query para hacer la consulta respectiva
   * en la base de datos
   * @returns {string} resultado de la consulta de la base de datos
   */
  getPosition($item) {
    const element = $item.querySelector('.zg_rank');
    return element ? element.textContent.trim() : '';
  }

  /**
   * Obtención de titulos (por medio de la variable encapsulada title)
   * @param {string} $item recibe un query para hacer la consulta respectiva
   * en la base de datos
   * @returns {string} resultado de la consulta de la base de datos
   */
  getTitle($item) {
    const element = $item.querySelector('.p13n-sc-truncate-desktop-type2');
    return element ? element.textContent.trim() : '';
  }

  /**
   * Obtención de posiciones (por medio de la variable encapsulada
   * numberOfReviews)
   * @param {string} $item recibe un query para hacer la consulta respectiva
   * en la base de datos
   * @returns {string} resultado de la consulta de la base de datos
   */
  getNumberOfReviews($item) {
    const element = $item.querySelector('div.a-icon-row.a-spacing-none > .a-size-small');
    return element ? element.textContent.trim() : '';
  }

  /**
   * Obtención de rango de texto (por medio de la variable encapsulada
   * textRanking)
   * @param {string} $item recibe un query para hacer la consulta respectiva
   * en la base de datos
   * @returns {string} resultado de la consulta de la base de datos
   */
  getTextRanking($item) {
    const element = $item.querySelector('div.a-icon-row.a-spacing-none > .a-link-normal');
    return element ? element.getAttribute('title') : '';
  }

  /**
   * Obtención de imagenes (por medio de la variable encapsulada img)
   * @param {string} $item recibe un query para hacer la consulta respectiva
   * en la base de datos
   * @returns {string|file} resultado de la consulta de la base de datos
   * parseada en imagen en caso de existir, de lo contrario,
   * devuelve una cadena vacia
   */
  getImg($item) {
    const element = $item.querySelector('img');
    if (element === null) {
      return '';
    }
    return element.getAttribute('src') ? decodeURIComponent(element.getAttribute('src')) : '';
  }

  /**
   * Obtención de id (por medio de la variable encapsulada id)
   * @param {string} $item recibe un query para hacer la consulta respectiva
   * en la base de datos
   * @returns {string} resultado de la consulta de la base de datos o null en
   * caso de no existir resultado
   */
  getId($item) {
    const element = $item.querySelector('.a-section.a-spacing-none.p13n-asin');
    return element ? element.getAttribute('data-p13n-asin-metadata') : null;
  }
}

module.exports = Adapter;
