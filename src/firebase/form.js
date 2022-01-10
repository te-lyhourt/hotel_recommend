import {db} from '../firebase/config'
import {addDoc, collection} from '@firebase/firestore'
export default function Model(type,data){
    if(type=='created'){
        addDoc(collection(db,'Hotel'),{
            hotelName: data.hotelName,
            location: data.location,
            dateOfBuild: data.dateOfBuild,
            contact: data.contact,
            website: data.website,
            email: data.email,
            province: data.province,
            stars: data.stars,
            about: data.about,
            roomTypes:data.roomTypes,
            services: data.services,
            images: data.images,        //store array of image url
            comments: []
        })
    }
}