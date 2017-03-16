const http = require('http')
const index = require('../index')
const request = require('supertest')


describe('Example web app', function() {
	it('should square numbers', function(done) {
		request(index)
			.get('/square/4')
			.expect(200)
			.expect(/16/, done)
	})
	it('should return 500 for invalid square requests', function(done) {
		request(index)
			.get('/square')
			.expect(500, done)
	})
})