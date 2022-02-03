
import { auth } from './config'
import { signInWithPopup, GoogleAuthProvider, signOut,signInWithEmailAndPassword } from "firebase/auth";

export default async function userAuth(type,data) {
    if(type=='login'){
        const provider = new GoogleAuthProvider()
        let userLogin = await signInWithPopup(auth,provider)
        if(userLogin){
            return true
        }
        
    }
    else if(type=='loginAdmin'){
        try {
            let userAdmin = await signInWithEmailAndPassword(auth,data.email,data.password)
            localStorage.setItem('userAdmin',userAdmin)
            if(userAdmin.user){
                return true
            }
        } catch (error) {
            return 'hi'
        }
        // if(data.email=="admin@admin.com"){
        //     if(data.password=="admin12345"){
        //         return true
        //     }
        // }
    }
    else if(type=='signout'){
        localStorage.removeItem('userAdmin')
        await signOut(auth)
        return false
    }
    
}