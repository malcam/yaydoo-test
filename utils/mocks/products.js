const productsMock = [
  {
    category: "libros",
    position: "1",
    title: "title",
    NumberOfReviews: "123",
    textRanking: "1 de 5",
    img: "https://www.example.com",
    id: "1"
  }
];


async function createProduct() {
  return Promise.resolve(productsMock);
}

async function getProducts() {
  return Promise.resolve({
    message: "Se guardo correctamente"
  });
}


module.exports = {
  productsMock,
  createProduct,
  getProducts
};
