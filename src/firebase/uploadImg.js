import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
export default async function uploadImgs(files){
    let urlImgs=[]
    for(let i=0;i<files.length;i++){
        let storage = getStorage();
        let storageRef = ref(storage,'images/'+files[i].name);
        let uploadTask = uploadBytesResumable(storageRef,files[i]);
        urlImgs.push(await new Promise(resolve=> uploadTask.on('state-change',()=>{
            
        },
        (err)=>{
            console.log(err);
        },
        ()=>{
            return  resolve(getDownloadURL(uploadTask.snapshot.ref));
        }
        )))
    }
    return urlImgs;
    
}