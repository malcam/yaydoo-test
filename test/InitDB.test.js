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
  // eslint-disable-next-line no-undef
  describe('Inicialización de base de datos', () => {
    // eslint-disable-next-line no-undef
    it('Debe crear la base de datos con contenido', async () => {
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
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          done();
        });
    }).timeout(10000);
    // eslint-disable-next-line no-undef
    it('Debe fallar si los arreglos están vacios', (done) => {
      chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(500);
          done();
        });
    });
    // eslint-disable-next-line no-undef
    it('Debe responder con un Objeto JSON', (done) => {
      chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          if (err) done(err);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
