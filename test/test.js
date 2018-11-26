const expect = require('chai').expect;
const request = require('request');

// it('Main page content', function(done) {
//   request('http://localhost:4000' , function(error, response, body) {
//     expect(body).to.equal('Hello world');
//     expect(response.statusCode).to.equal(200);
//     done();
//   });
// });
//
//
// it('About page content', function(done) {
//   request('http://localhost:4000/about' , function(error, response, body) {
//     expect(response.statusCode).to.equal(404);
//     done();
//   });
// });

describe('Status and content', function () {
  describe('Main page', function () {
    it('should be 200 like a status', function (done) {
      request('http://localhost:4000/', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    
    it('it should be hello world like a content', function (done) {
      request('http://localhost:4000/', function (error, response, body) {
        expect(body).to.equal('Hello world');
        done();
      });
    });
    
    it('another one', function (done) {
      request('http://localhost:4000/', function (error, response, body) {
        expect(body.toLowerCase()).to.equal('hello World'.toLowerCase());
        done();
      });
    });
  });
  
  describe('About page', function () {
    it('status', function (done) {
      request('http://localhost:4000/about', function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
    
  });
});
