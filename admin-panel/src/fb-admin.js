const admin = require('firebase-admin');
const serviceAccount = require('../methdotdev-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'methdotdev.appspot.com'
});

let fb = {};

fb.db = admin.firestore();
fb.admin = admin;
fb.bucket = admin.storage().bucket();

module.exports = fb;