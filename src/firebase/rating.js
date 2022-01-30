import {db} from '../firebase/config'
import {addDoc} from '@firebase/firestore'
import getRating from './getRating'
export default function rating(stars,hotel_id,user_id){
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
    else if(stars==1){
        stars_1=1
    }
    addDoc(collection(db,rating),{
        hotel_id:hotel_id,
        stars_5:stars_5,
        stars_4:stars_4,
        stars_3:stars_3,
        stars_2:stars_2,
        stars_1:stars_1,
        totel:stars,
        user:[{
            user_id:user_id,stars:stars
        }]
    })
    return getRating(hotel_id)
}