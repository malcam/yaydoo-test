/**
 * Modelo para recibir y enviar información a la base de datos
 * @Constructor
 */

class Product {
  constructor(data = {}) {
    this.id = data.id;
    this.category = data.category;
    this.position = data.position;
    this.title = data.title;
    this.numberOfReviews = data.numberOfReviews;
    this.textRanking = data.textRanking;
    this.img = data.img;
  }
}

module.exports = Product;
