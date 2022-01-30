import {db} from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
export default async function sortHotel(hotel_id) {
    let rating=null
    const q = query(collection(db, "rating"), where("hotel_id", "==", hotel_id));
    const querySnapshot = await getDocs(q);
    rating = new Promise(resolve=>{
        let datas=[]
        querySnapshot.forEach((doc) => {
            datas.push({uid:doc.id,data:doc.data()})
        });
        return resolve(datas)
    })
    return rating
}