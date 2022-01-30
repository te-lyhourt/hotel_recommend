import {db} from '../firebase/config'
import {doc, updateDoc} from '@firebase/firestore'
import listOneHotelByID from './listOneHotel'
export default async function updateUserRating(hotel_id,user_id,stars){
    let getHotelByID = await listOneHotelByID(hotel_id)
    
}