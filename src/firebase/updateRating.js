import { db } from '../firebase/config'
import { doc, updateDoc } from '@firebase/firestore'
import listOneHotelByID from './listOneHotel'
import listRating  from './listRating'
import userRate from './userRate'

export default async function updatRating(user_id,rating_id, oldRate, newRate, comment, hotel) {
    const Rating = doc(db, 'Rating', rating_id)

    await updateDoc(Rating, {
        stars: newRate,
        comments: comment,
    })

    let stars_5 = hotel.rating.stars_5
    let stars_4 = hotel.rating.stars_4
    let stars_3 = hotel.rating.stars_3
    let stars_2 = hotel.rating.stars_2
    let stars_1 = hotel.rating.stars_1

    if (oldRate == 5) stars_5 -= 1
    else if (oldRate == 4) stars_4 -= 1
    else if (oldRate == 3) stars_3 -= 1
    else if (oldRate == 2) stars_2 -= 1
    else if (oldRate == 1) stars_1 -= 1

    if (newRate == 5) stars_5 = 1
    else if (newRate == 4) stars_4 += 1
    else if (newRate == 3) stars_3 += 1
    else if (newRate == 2) stars_2 += 1
    else if (newRate == 1) stars_1 += 1
    let hotel_id = hotel.uid

    let rateNum = (stars_5 + stars_4 + stars_3 + stars_2 + stars_1)
    let total = Math.round(((stars_5 * 5) + (stars_4 * 4) + (stars_3 * 3) + (stars_2 * 2) + (stars_1 * 1)) / rateNum)

    const Hotel = doc(db, 'Hotel', hotel_id)
    await updateDoc(Hotel, {
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

    //get all the new rating
    let rating = await listRating(hotel_id)

    //get the user rate for display on top
    let result = userRate(user_id,rating)

    let userRating = result.userRate
    rating = result.rating
    
    //get the updated hotel
    let newhotel = await listOneHotelByID(hotel_id)
    let data = {
        rating: rating,
        hotel : newhotel,
        userRating: userRating
    }
    return data
}