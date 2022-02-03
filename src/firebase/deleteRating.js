import { doc, deleteDoc ,updateDoc} from "firebase/firestore";
import { db } from './config'
import listOneHotelByID from './listOneHotel'
import listRating from "./listRating";

export default async function deleterating(rating_id, hotel, stars) {
    console.log(rating_id, hotel, stars)
    await deleteDoc(doc(db, "Rating", rating_id));

    let stars_5 = hotel.rating.stars_5
    let stars_4 = hotel.rating.stars_4
    let stars_3 = hotel.rating.stars_3
    let stars_2 = hotel.rating.stars_2
    let stars_1 = hotel.rating.stars_1

    if (stars == 5) stars_5 -=1
    else if (stars == 4) stars_4 -= 1
    else if (stars == 3) stars_3 -= 1
    else if (stars == 2) stars_2 -= 1
    else if (stars == 1) stars_1 -= 1

    let rateNum = (stars_5 + stars_4 + stars_3 + stars_2 + stars_1)
    let isRating = true
    if(rateNum ==0) isRating= false

    let total = Math.round(((stars_5 * 5) + (stars_4 * 4) + (stars_3 * 3) + (stars_2 * 2) + (stars_1 * 1)) / rateNum)
    const frankDocRef = doc(db, 'Hotel', hotel.uid)
    await updateDoc(frankDocRef, {
        isRating: isRating,
        rating: {
            rateNum: rateNum,
            total: total,
            stars_5: stars_5,
            stars_4: stars_4,
            stars_3: stars_3,
            stars_2: stars_2,
            stars_1: stars_1,
        }
    })
    let rating = await listRating(hotel.uid)
    let newHotel =  await listOneHotelByID(hotel.uid)
    let data = {
        rating : rating,
        hotel : newHotel,
    }
    console.log(data)
    return data
}