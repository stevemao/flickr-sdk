var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.create', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.create({ title: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.galleries.create({ api_key: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "description"', function () {

		assert.throws(function () {
			flickr.galleries.create({ api_key: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "description"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.create({ api_key: '_', title: '_', description: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});