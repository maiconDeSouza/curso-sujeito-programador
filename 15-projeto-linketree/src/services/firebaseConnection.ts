import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBsBHCXPyfoiLtgItEFv_MP0e4CH67dbJc",
  authDomain: "reactlinks-a7164.firebaseapp.com",
  projectId: "reactlinks-a7164",
  storageBucket: "reactlinks-a7164.appspot.com",
  messagingSenderId: "159460043842",
  appId: "1:159460043842:web:1edc37cfb18e1df0d411db"
}


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)