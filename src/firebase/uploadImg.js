import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
export default function uploadImgs(files){
    // files.forEach(file => {
    
    // });
    for(let i=0;i<files.length;i++){
        let metaData ={
            contentType: files[i].type
        }
        let storage = getStorage();
        let storageRef = ref(storage,'images/'+files[i].name);
        let uploadTask = uploadBytesResumable(storageRef,files[i],metaData);
        uploadTask.on('state-change', ()=>{
            
        },
        (err)=>{
            console.log(err);
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl=>{
                console.log(downloadUrl);
            }).catch(err=>{
                console.log(err);
            })
        })
    }
}