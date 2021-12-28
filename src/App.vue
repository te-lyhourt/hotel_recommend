<template>
  <div id="app">
    {{firebaseData}}
  </div>
</template>

<script>
  import {db} from './firebase/firebase';
  const documentPath = 'contacts/jeff';

  export default{
    data(){
      return{
        firebaseData:null,
      }
    },
    firestore(){
      return{
        firebaseData: db.doc(documentPath)
      }
    },
  }
</script>

<style>

</style>
