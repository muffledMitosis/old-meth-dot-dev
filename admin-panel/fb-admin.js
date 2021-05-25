const admin = require('firebase-admin');
const serviceAccount = require('./methdotdev-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let fb = {};

fb.db = admin.firestore();
fb.admin = admin;


module.exports = fb;