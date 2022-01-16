export default function resetForm(){
    const form={
        hotelName: null ,
        location: null ,
        dateOfBuild: null,
        contact: null,
        website: null,
        email: null,
        province: '',
        stars: '',
        about: null,
        roomTypes:[],   // array
        services: {
            free_wifi:true,
            spa:true,
            food:true,
            parking:true,
            pool:true,
            gym:true
        },    // array of object
        urlImages:null, 
    }
    return form
}