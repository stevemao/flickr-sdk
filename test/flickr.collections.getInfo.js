var flickr = require('..')();
var assert = require('assert');

describe('flickr.collections.getInfo', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.collections.getInfo({ collection_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "collection_id"', function () {

		assert.throws(function () {
			flickr.collections.getInfo({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "collection_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.collections.getInfo({ api_key: '_', collection_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});