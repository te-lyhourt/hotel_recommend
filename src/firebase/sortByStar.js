import {db} from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
export default async function sortHotelByStar(amount) {
    let hotel=null
    const q = query(collection(db, "Hotel"), where("stars", "==", amount));

    const querySnapshot = await getDocs(q);
    hotel = new Promise(resolve=>{
        let datas=[]
        querySnapshot.forEach((doc) => {
            datas.push({uid:doc.id,data:doc.data()})
        });
        return resolve(datas)
    })
    return hotel
}