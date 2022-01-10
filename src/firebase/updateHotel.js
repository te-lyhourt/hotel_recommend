import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase/config'
export default async function updatedHotel(id,data) {
    const frankDocRef = doc(db,'Hotel',id)
    const isUpdated = await updateDoc(frankDocRef,{
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
    }).then(()=>{
        return "Updated Success!"
    }).catch(err=>{
        return err
    })
    return isUpdated
}