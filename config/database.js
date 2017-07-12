const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  // uri: 'mongodb://localhost:27017/mean-angular-2', // Databse URI and database name
  uri: 'mongodb://patel:patel@ds153752.mlab.com:53752/angular-2-app', // Production
  secret: crypto, // Cryto-created secret
  db: 'angular-2-app' // Database name
}
