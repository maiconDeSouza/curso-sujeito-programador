import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBcY9_8VWGqmdKpHF9pOL2mGbzr2q2p9KY',
  authDomain: 'web-carros-a233f.firebaseapp.com',
  projectId: 'web-carros-a233f',
  storageBucket: 'web-carros-a233f.appspot.com',
  messagingSenderId: '243666929284',
  appId: '1:243666929284:web:ea4f9149843281d6f4e4d1',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
