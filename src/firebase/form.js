import {db} from '../firebase/config'
import {addDoc, collection} from '@firebase/firestore'
export default function modelHotel(data){
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
        roomTypes:data.roomTypes,   // array
        services: data.services,    // array of object
        images: data.urlImages,        //store array of image url
        comments: [],
        rating:[]
    })
    return "Success Added"
}