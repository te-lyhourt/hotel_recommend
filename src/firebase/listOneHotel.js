import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase/config'
// import listRating from './listRating'

export default async function listOneHotelByID(id){
    
    const docRef = doc(db, "Hotel", id);
    const docSnap = await getDoc(docRef);
    // let rating = await listRating(id)
    // data.allRating = rating
    let data = docSnap.data()
    data.uid = id
    
    if (docSnap.exists()) {
        return data
    } else {
    // doc.data() will be undefined in this case
        return "No such document!"
    }
}