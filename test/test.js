var request = require("request"),
    assert = require('assert'),
    chai = require('chai'),
    base_url = 'https://fhwn19-node-08.azurewebsites.net/'

describe("Node Express", function() {
    describe("GET /", function() {
        it ("returns status code 200", function(done){
            request.get(base_url, function(error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            });
        });

        it("Contains Welcome", function(done){
            request.get(base_url, function(error, response, body){
                chai.assert.include(body, "Welcome"); 
                done();
            });
        });
    });
});
