import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase/config'
export default async function updatedHotel(id,data) {
    const frankDocRef = doc(db,'Hotel',id)
    const isUpdated = await updateDoc(frankDocRef,{
        hotelName: data.hotelName,
        hotelPrice:data.hotelPrice,
        location: data.location,
        dateOfBuild: data.dateOfBuild,
        contact: data.contact,
        website: data.website,
        email: data.email,
        province: data.province,
        stars: data.stars,
        about: data.about,
        roomTypes:data.roomTypes,
        services: data.services,       //store array of image url
    }).then(()=>{
        return "Updated Success!"
    }).catch(err=>{
        return err
    })
    return isUpdated
}