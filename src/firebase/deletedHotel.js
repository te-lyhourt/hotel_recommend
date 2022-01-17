import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase/config'
import listHotel from '../firebase/listHotel'
export default async function deletedHotel(id){
    await deleteDoc(doc(db, "Hotel", id));
    return listHotel()
}
