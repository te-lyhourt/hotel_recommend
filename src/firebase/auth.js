// import { ref, onUnmounted, computed } from 'vue'
import { auth } from './config'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function useAuth() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider).then(result=>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user);
    }).catch(error=>{
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode,errorMessage,email,credential);
    })
}