
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
    // else if(type=='login'){
    //     signInWithEmailAndPassword(auth,data.email, data.password).then(res=>{
    //         console.log(res);
    //     })
    // }
    else if(type=='loginAdmin'){
        let userAdmin = await signInWithEmailAndPassword(auth,data.email,data.password)
        if(userAdmin.user){
            return true
        }
        // if(data.email=="admin@admin.com"){
        //     if(data.password=="admin12345"){
        //         return true
        //     }
        // }
    }
    else if(type=='signout'){
        await signOut(auth)
        return true
        
    }
    
}