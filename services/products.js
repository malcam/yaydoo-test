const productsMocks = require("../utils/mocks/products");
const { createDb } = require("../lib/db");

async function createProduct(product) {
  try {
    const services = await createDb();    
    product.map( async item => {
      const id = JSON.parse(item.id) ? JSON.parse(item.id).asin : Math.random();
      await services.setProducts(id, item.category, item.title, item.textRanking, item.NumberOfReviews, item.img);
    })
  } catch (error) {
    console.error("error createProduct ", error);
    return error
  }
}

async function getProducts() {
  try {
    const services = await createDb();
    const products = await services.getProducts();
    return products;
  } catch (error) {
    console.error("error getProducts ", error);
    return error
  }
}

module.exports = {
  createProduct,
  getProducts
};
