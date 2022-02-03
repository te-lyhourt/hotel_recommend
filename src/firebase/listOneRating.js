import { db } from '../firebase/config'
import {getDocs,where,query,collection } from '@firebase/firestore'

export default async function listOneRating(hotel_id,user_id) {
    
    let q = query(collection(db,"Rating"),where('hotel_id','==',hotel_id),where('user-id','==',user_id),limit(1))
    const querySnapshot = await getDocs(q)
    let rating = null

    rating =  await new Promise(resolve=>{
        let datas=[]
        querySnapshot.forEach(res=>{
            datas.push({uid:res.id,data:res.data()})
        })
        return resolve(datas)
    })
    return rating
}