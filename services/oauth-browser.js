/**
 * OAuth 1.0 requires your consumer secret to sign calls,
 * and you should never expose secrets to the browser.
 * @constructor
 * @throws {Error}
 */

function OAuth() {
	throw new Error('OAuth 1.0 is not supported in the browser');
}

/**
 * @module services/oauth-browser
 */

module.exports = OAuth;