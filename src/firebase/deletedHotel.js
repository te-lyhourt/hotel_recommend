import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase/config'
export default async function deletedHotel(id){
    await deleteDoc(doc(db, "Hotel", id));
}
