import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNTrpIhfUs2g-vOboFSI8yPm3Ayd54Qq0',
  authDomain: 'perlas-2a0fb.firebaseapp.com',
  databaseURL: 'https://perlas-2a0fb-default-rtdb.firebaseio.com',
  projectId: 'perlas-2a0fb',
  storageBucket: 'perlas-2a0fb.appspot.com',
  messagingSenderId: '676192178313',
  appId: '1:676192178313:web:5c27e826532cafb129b658',
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth
const db = firebase.firestore

export { auth, db }
