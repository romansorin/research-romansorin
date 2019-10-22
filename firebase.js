// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCO605Sg-zHp3034Pwg7uBwcbT_VyVVX8E',
  authDomain: 'research-romansorin.firebaseapp.com',
  databaseURL: 'https://research-romansorin.firebaseio.com',
  projectId: 'research-romansorin',
  storageBucket: 'research-romansorin.appspot.com',
  messagingSenderId: '520588087445',
  appId: '1:520588087445:web:5c823d0bd1928d68e38b9c',
  measurementId: 'G-BMXGTF3X91'
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.firestore()
export const storage = firebase.storage()
