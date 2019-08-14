process.env.NODE_ENV = 'test';

let Configuration = require('../model/configuration');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Configuration', () => {

    describe('/GET config', () => {
      it('it should GET all the configs', (done) => {
        chai.request(server)
            .get('/config')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
              done();
            });
      });
    });

    describe('/GET config/:id', () => {
      it('it should GET all the configs in group id passed', (done) => {
        chai.request(server)
            .get('/config/1')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
              done();
            });
      });
    });
});
