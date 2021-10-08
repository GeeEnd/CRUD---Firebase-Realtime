// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyA6sSNZQEHk_HH4_Zx2_Mu0dOWKyXb0Ttg",
  authDomain: "fir-crud-85628.firebaseapp.com",
  databaseURL: "https://fir-crud-85628-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-crud-85628",
  storageBucket: "fir-crud-85628.appspot.com",
  messagingSenderId: "146626234827",
  appId: "1:146626234827:web:57281c45d7b5b4de0e0e4e"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
