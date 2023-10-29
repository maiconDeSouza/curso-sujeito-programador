import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvq6tFPlqU4DNVroQwS7BOfAji2oEJGiA",
    authDomain: "curso-sujeito-programado-92fe0.firebaseapp.com",
    projectId: "curso-sujeito-programado-92fe0",
    storageBucket: "curso-sujeito-programado-92fe0.appspot.com",
    messagingSenderId: "983328903104",
    appId: "1:983328903104:web:a2505743285b76f85a0225",
    measurementId: "G-T1TYEWZ931"
  }

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
