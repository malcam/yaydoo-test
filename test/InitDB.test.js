// Dependencies
const chaiHttp = require('chai-http');
const chai = require('chai');

// Assets
const server = require('../index');

// Assertion
chai.should();
chai.use(chaiHttp);

// eslint-disable-next-line no-undef
describe('Productos', () => {
  // describe();
  // eslint-disable-next-line no-undef
  describe('Bajo promesa', () => {
    it('Debe crear la base de datos', async () => {
      const res = await chai.request(server)
        .post('/api/init');
      res.should.have.status(201);
    }).timeout(5000);
  });
  // eslint-disable-next-line no-undef
  describe('Obtención de productos', () => {
    // eslint-disable-next-line no-undef
    it('Debe devolver todos los productos agregados', (done) => {
      chai.request(server)
        .get('/api/products')
        .end((req, res) => {
          res.should.have.status(200);
          done();
        });
    }).timeout(5000);
    // eslint-disable-next-line no-undef
    it('Debe fallar si los arreglos están vacios', (done) => {
      chai.request(server)
        .get('/api/products')
        .end((req, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});
