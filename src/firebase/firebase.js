import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Filter from 'bad-words'
import { ref, onUnmounted, computed } from 'vue'

firebase.initializeApp({
    apiKey: "AIzaSyALsDv62SO5n7Kyhqpl4djJrwzA3LXHgGE",
    authDomain: "hotel-recommend-fc844.firebaseapp.com",
    projectId: "hotel-recommend-fc844",
    storageBucket: "hotel-recommend-fc844.appspot.com",
    messagingSenderId: "645385774639",
    appId: "1:645385774639:web:c8033e5f862c542269c8da",
    measurementId: "G-RQR80E486W"
})

const auth = firebase.auth()

export function useAuth() {
    const user = ref(null)
    const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
    onUnmounted(unsubscribe)
    const isLogin = computed(() => user.value !== null)
  
    const signIn = async () => {
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      await auth.signInWithPopup(googleProvider)
    }
    const signOut = () => auth.signOut()
  
    return { user, isLogin, signIn, signOut }
}

asadssad