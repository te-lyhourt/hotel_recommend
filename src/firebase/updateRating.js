import {db} from '../firebase/config'
import {doc, updateDoc} from '@firebase/firestore'
import listOneHotelByID from './listOneHotel'
import listOneRating from './listOneRating.js'

export default async function updateUserRating(stars, hotel_id, user_id, comments){
    
    if (stars == 5) stars_5 = 1
    else if (stars == 4) stars_4 = 1
    else if (stars == 3) stars_3 = 1
    else if (stars == 2) stars_2 = 1
    else if (stars == 1) stars_1 = 1
}