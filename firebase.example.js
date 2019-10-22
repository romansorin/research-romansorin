// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  // Your app specific config
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.firestore()
export const storage = firebase.storage()
