import {db} from '../firebase/config'
import {doc, updateDoc} from '@firebase/firestore'
// import getRating from './getRating'
import listOneHotelByID from './listOneHotel'
export default async function rating(stars,hotel_id,user_id){
    let getHotelByID= await listOneHotelByID(hotel_id)
    let stars_5=0
    let stars_4=0
    let stars_3=0
    let stars_2=0
    let stars_1=0
    if(stars==5){
        stars_5=1
    }
    else if(stars==4){
        stars_4=1
    }
    else if(stars==3){
        stars_3=1
    }
    else if(stars==2){
        stars_2=1
    }
    else {
        stars_1=1
    }
    // add rating to hotel for first rating
    if(getHotelByID.rating.users.length==0){
        const frankDocRef = doc(db,'Hotel',hotel_id)
        const isUpdated = await updateDoc(frankDocRef,{
            rating:{
                stars_5:stars_5,
                stars_4:stars_4,
                stars_3:stars_3,
                stars_2:stars_2,
                stars_1:stars_1,
                total:stars,
                users:[{
                    user_id:user_id,stars:stars
                }]
            }
                 //store array of image url
        }).then(()=>{
            return "Updated Success!"
        }).catch(err=>{
            return err
        })
        return isUpdated
        // addDoc(collection(db,'Rating'),{
        //     hotel_id:hotel_id,
        //     stars_5:stars_5,
        //     stars_4:stars_4,
        //     stars_3:stars_3,
        //     stars_2:stars_2,
        //     stars_1:stars_1,
        //     total:stars,
        //     user:[{
        //         user_id:user_id,stars:stars
        //     }]
        // })
    }
    // add more user rating to existing rating
    else{
         // get uid and data rating
        // let rating = await getRating(hotel_id)
        let updateStar_5 = getHotelByID.rating.stars_5+stars_5
        let updateStar_4 = getHotelByID.rating.stars_4+stars_4
        let updateStar_3 = getHotelByID.rating.stars_3+stars_3
        let updateStar_2 = getHotelByID.rating.stars_2+stars_2
        let updateStar_1 = getHotelByID.rating.stars_1+stars_1
        getHotelByID.rating.users.push({user_id:user_id,stars:stars})
        let total_rating = parseInt((5*updateStar_5+4*updateStar_4+3*updateStar_3+2*updateStar_2+updateStar_1)/getHotelByID.rating.users.length)
        const frankDocRef = doc(db,'Hotel',hotel_id)
        const isUpdated = await updateDoc(frankDocRef,{
            rating:{
                stars_5:updateStar_5,
                stars_4:updateStar_4,
                stars_3:updateStar_3,
                stars_2:updateStar_2,
                stars_1:updateStar_1,
                total:total_rating,
                users:getHotelByID.rating.user.push({user_id:user_id,stars:stars})
            }
                 //store array of image url
        }).then(()=>{
            return "Updated Success!"
        }).catch(err=>{
            return err
        })
        return isUpdated
        // const frankDocRef = doc(db,'rating',rating.uid)
        // const isUpdated = await updateDoc(frankDocRef,{
        //     stars_5:updateStar_5,
        //     stars_4:updateStar_4,
        //     stars_3:updateStar_3,
        //     stars_2:updateStar_2,
        //     stars_1:updateStar_1,
        //     total:parseInt((5*updateStar_5+4*updateStar_4+3*updateStar_3+2*updateStar_2+updateStar_1)/rating.data.user.length),
        //     user:updateUser
        // }).then(()=>{
        //     return "Updated Success!"
        // }).catch(err=>{
        //     return err
        // })

    }
}