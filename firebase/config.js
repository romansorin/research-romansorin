// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/analytics'
import 'firebase/storage'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  appId: process.env.APP_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  projectId: process.env.FIREBASE_PROJECT_ID,
  measurementId: process.env.MEASUREMENT_ID,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

let database = {}
let storage = {}
let analytics = {}
let functions = {}

if (firebase) {
  firebase.initializeApp(config)
  database = firebase.firestore()
  storage = firebase.storage()
  analytics = firebase.analytics()
  functions = firebase.functions()
}

export { database, storage, analytics, functions }
