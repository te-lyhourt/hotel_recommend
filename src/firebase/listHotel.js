import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase/config'
export default async function listHotels(){
    let hotels=null
    const querySnapshot = await getDocs(collection(db,"Hotel"))
    
    hotels = await new Promise(resolve=>{
        let datas=[]
        querySnapshot.forEach(res=>{
            datas.push(res.data())
        })
        return resolve(datas)
    })   
    return hotels
}