var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.setDates', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.setDates({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setDates({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.setDates({ api_key: '_', photo_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});