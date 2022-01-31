import {db} from '../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";
export default async function sortHotelByStar(startPrice,endPrice,type) {

    let hotel=null
    let q
    if(type=='under'){
        q = query(collection(db, "Hotel"), where("hotelPrice", "<", endPrice))
    }
    else if (type=='above'){
        q = query(collection(db, "Hotel"), where("hotelPrice", ">", endPrice))
    }
    else{
        q = query(collection(db, "Hotel"), where("hotelPrice", ">=", startPrice),where("hotelPrice", "<=", endPrice))
    }
    const querySnapshot = await getDocs(q);
    hotel = new Promise(resolve=>{
        let datas=[]
        querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>' ,doc.data())
            datas.push({uid:doc.id,data:doc.data()})
        });
        return resolve(datas)
    })
    console.log(hotel)
    return hotel
}