import * as admin from 'firebase-admin'

const serviceAccount = require('./firebase-key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ''
})
