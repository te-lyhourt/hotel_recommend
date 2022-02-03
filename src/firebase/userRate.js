export default function userRate(user_id,rating) {
    let userRate
    let data={}
    rating.forEach(rate => {
        if(rate.data.user_id == user_id){
            userRate = rate
            rating = rating.filter((item) => item.data.user_id !== user_id);
        }
    });
    data.userRate =userRate
    data.rating = rating
    return data
}