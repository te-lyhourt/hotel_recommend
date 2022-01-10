import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase/config'
export default async function listOneHotelByID(id){
    
    const docRef = doc(db, "Hotel", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
    // doc.data() will be undefined in this case
        return "No such document!"
    }
}