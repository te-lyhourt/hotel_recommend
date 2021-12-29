import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig ={
    apiKey: "AIzaSyALsDv62SO5n7Kyhqpl4djJrwzA3LXHgGE",
    authDomain: "hotel-recommend-fc844.firebaseapp.com",
    projectId: "hotel-recommend-fc844",
    storageBucket: "hotel-recommend-fc844.appspot.com",
    messagingSenderId: "645385774639",
    appId: "1:645385774639:web:c8033e5f862c542269c8da",
    measurementId: "G-RQR80E486W"
}

initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()
export {auth,db}


