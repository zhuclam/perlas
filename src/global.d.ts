/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '@/firebase' {
  import firebase from 'firebase/app'
  const auth = firebase.auth
  const db = firebase.firestore
  export { auth, db }
}
