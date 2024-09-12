// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA14nyIukK0TrlFBWbKn6krdR2FCFDW0yU",
  authDomain: "ahmed-52a62.firebaseapp.com",
  databaseURL: "https://ahmed-52a62-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ahmed-52a62",
  storageBucket: "ahmed-52a62.appspot.com",
  messagingSenderId: "68566262343",
  appId: "1:68566262343:web:6fa0aa17bd4bfa25714762",
  measurementId: "G-WL8K6DXZ6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//detect
// onAuthStateChanged(auth,user=>{
//     if(user!==null){
//         console.log('logged');
        
//     }else{
        
//         console.log('no user');
//     }
// })