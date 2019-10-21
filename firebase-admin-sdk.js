import * as admin from 'firebase-admin'

const serviceAccount = require('./firebase-key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://research-34a17.firebaseio.com'
})
