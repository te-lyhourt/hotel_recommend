import { db } from '../firebase/config'
import { doc, addDoc, collection, updateDoc } from '@firebase/firestore'

// 
// import {,doc, } from '@firebase/firestore'
import listRating from './listRating'

import listOneHotelByID from './listOneHotel'
import userRate from './userRate'
export default async function rating(stars, hotel_id, user_id, comments,photo,name) {

    let getHotelByID = await listOneHotelByID(hotel_id)
    console.log(getHotelByID)
    //hotel never got rate
    if (!getHotelByID.isRating) {
        let stars_5 = 0
        let stars_4 = 0
        let stars_3 = 0
        let stars_2 = 0
        let stars_1 = 0

        if (stars == 5) stars_5 = 1
        else if (stars == 4) stars_4 = 1
        else if (stars == 3) stars_3 = 1
        else if (stars == 2) stars_2 = 1
        else if (stars == 1) stars_1 = 1

        const frankDocRef = doc(db, 'Hotel', hotel_id)
        await updateDoc(frankDocRef, {
            isRating: true,
            rating: {
                rateNum: 1,
                total: stars,
                stars_5: stars_5,
                stars_4: stars_4,
                stars_3: stars_3,
                stars_2: stars_2,
                stars_1: stars_1,
            }
        })
    }
    //hotel get rate before
    else {
        let stars_5 = getHotelByID.rating.stars_5
        let stars_4 = getHotelByID.rating.stars_4
        let stars_3 = getHotelByID.rating.stars_3
        let stars_2 = getHotelByID.rating.stars_2
        let stars_1 = getHotelByID.rating.stars_1

        if (stars == 5) stars_5 = 1
        else if (stars == 4) stars_4 += 1
        else if (stars == 3) stars_3 += 1
        else if (stars == 2) stars_2 += 1
        else if (stars == 1) stars_1 += 1

        let rateNum = (stars_5+stars_4+stars_3+stars_2+stars_1)
        let total = Math.round(((stars_5*5)+(stars_4*4)+(stars_3*3)+(stars_2*2)+(stars_1*1))/rateNum)
        const frankDocRef = doc(db, 'Hotel', hotel_id)
        await updateDoc(frankDocRef, {
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
    }

    //add new rating 
    addDoc(collection(db, 'Rating'), {
        user_id: user_id,
        hotel_id: hotel_id,
        stars: stars,
        comments: comments,
        photo:photo,
        name:name
    })

    //get all the new rating
    let rating = await listRating(hotel_id)

    //get the user rate for display on top
    let result = userRate(user_id,rating)
    let userRating = result.userRate
    rating = result.rating
    
    //get the updated hotel
    let hotel = await listOneHotelByID(hotel_id)
    let data = {
        rating: rating,
        hotel : hotel,
        userRating: userRating
    }
    return data
}