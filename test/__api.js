var request = require('supertest');

describe('API', function() {
    var server;
    
    beforeEach(function() {
        server = require('../src/server.js');
    });
    
    afterEach(function() {
        server.close();
    });
    
    it('/ should return specified object.', function testHealth(done) {
        request(server)
            .get('/api/')
            .set('Accept', 'application/json')
            .expect('Content-Type',  /json/)
            .expect(200, {hello: "world"}, done);
    });
    
    it('/status should return specified healthy:true.', function testHealth(done) {
        request(server)
            .get('/api/status')
            .set('Accept', 'application/json')
            .expect('Content-Type',  /json/)
            .expect(200, {healthy: true}, done);
    });
    
    it('/user/id should return a user object with matching id.', function testHealth(done) {
        var fakeUserID = 333;
        request(server)
            .get('/api/user/' + fakeUserID)
            .set('Accept', 'application/json')
            .expect('Content-Type',  /json/)
            .expect(200, {user: {id: fakeUserID}}, done);
    });
    
    it('/v1 should return json object hello: "world".', function testHealth(done) {
        request(server)
            .get('/api/v1/')
            .set('Accept', 'application/json')
            .expect('Content-Type',  /json/)
            .expect(200, {hello: "world"}, done);
    });
});