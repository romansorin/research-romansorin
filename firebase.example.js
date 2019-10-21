// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {
  // Your app specific config
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
export const storage = firebase.storage()
