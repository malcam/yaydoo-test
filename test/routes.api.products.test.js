const assert = require("assert");
const proxyquire = require("proxyquire");

const {
  productsMock,
  createProduct,
  getProducts
} = require("../utils/mocks/products");

const testServer = require("../utils/testServer");

describe("routes - api - products", function() {
  const route = proxyquire("../routes/api", {
    "../services/products": {
      createProduct,
      getProducts
    }
  });
  const request = testServer(route);

  describe("POST /products", function() {
    it("should respond with status 200", function(done) {
      request.post("/api/products").expect(200, done);
    });
  });
});
