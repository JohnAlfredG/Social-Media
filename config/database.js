// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
uri: 'mongodb://johnalfred:garcia@ds117605.mlab.com:17605/meandb2', // Databse URI and database name
 secret: crypto, // Cryto-created secret
 db: 'meandb2' // Database name
}