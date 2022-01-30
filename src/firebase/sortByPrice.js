import {db} from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
export default async function sortHotelByStar(startPrice,endPrice) {
    console.log(startPrice)
    console.log(endPrice)
    let hotel=null
    const q = query(collection(db, "Hotel"), where("roomTypes.0.price", ">=", 50),where('roomTypes.0.price',"<=",100));

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