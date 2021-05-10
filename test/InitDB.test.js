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
  describe('Creación + Uso de Base de Datos', (done) => {
    // eslint-disable-next-line no-undef
    it('Debe crear la base de datos', () => {
      chai.request(server)
        .post('/api/init')
        .end((req, res) => {
          res.should.have.status(201);
          done();
        });
    });
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
    });
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
