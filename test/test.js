const RSA = require('../index');
const assert = require('assert');

describe('RSA', function() {
	describe('#getKeys()', function() {
		it('all keys should be integer', function() {
			const rsa = new RSA();
			const { N, e, d } = rsa.getKeys();
			assert.equal(Number.isInteger(N), true, N);
			assert.equal(Number.isInteger(e), true, e);
			assert.equal(Number.isInteger(d), true, d);
		});
	});

	describe('#encrypt() & #decrypt()', function() {
		describe('RSA Prime Under 128', function() {
			it('should encrypt to a string and then decrypt it to original', function() {
				for(let j = 0; j < 100; ++j) {
					const rsa = new RSA(128);
					const { N, e, d } = rsa.getKeys();
	
					let message = '';
					for(let i  = 0; i < Math.random() * 128; ++i) {
						message += String.fromCharCode(i);
					}
					let cipher = RSA.encrypt(message, e, N);
					assert.equal(RSA.decrypt(cipher, d, N), message)
				}
			})
		})

		describe('RSA Prime Under 256', function() {
			it('should encrypt to a string and then decrypt it to original', function() {
				for(let j = 0; j < 100; ++j) {
					const rsa = new RSA(256);
					const { N, e, d } = rsa.getKeys();
	
					let message = '';
					for(let i  = 0; i < Math.random() * 256; ++i) {
						message += String.fromCharCode(i);
					}
					let cipher = RSA.encrypt(message, e, N);
					assert.equal(RSA.decrypt(cipher, d, N), message)
				}
			})
		})

		describe('RSA Prime Under 512', function() {
			it('should encrypt to a string and then decrypt it to original', function() {
				for(let j = 0; j < 100; ++j) {
					const rsa = new RSA(512);
					const { N, e, d } = rsa.getKeys();
	
					let message = '';
					for(let i  = 0; i < Math.random() * 512; ++i) {
						message += String.fromCharCode(i);
					}
					let cipher = RSA.encrypt(message, e, N);
					assert.equal(RSA.decrypt(cipher, d, N), message)
				}
			})
		})

		describe('RSA Prime Under 1024', function() {
			it('should encrypt to a string and then decrypt it to original', function() {
				for(let j = 0; j < 100; ++j) {
					const rsa = new RSA(1024);
					const { N, e, d } = rsa.getKeys();
	
					let message = '';
					for(let i  = 0; i < Math.random() * 1024; ++i) {
						message += String.fromCharCode(i);
					}
					let cipher = RSA.encrypt(message, e, N);
					assert.equal(RSA.decrypt(cipher, d, N), message)
				}
			})
		})

		describe('RSA Prime Under 2048', function() {
			it('should encrypt to a string and then decrypt it to original', function() {
				for(let j = 0; j < 100; ++j) {
					const rsa = new RSA(2048);
					const { N, e, d } = rsa.getKeys();
	
					let message = '';
					for(let i  = 0; i < Math.random() * 2048; ++i) {
						message += String.fromCharCode(i);
					}
					let cipher = RSA.encrypt(message, e, N);
					assert.equal(RSA.decrypt(cipher, d, N), message)
				}
			})
		})
	})
})
