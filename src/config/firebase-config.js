// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBziae1q0CwnBfGX4BDrBlFr7e-UcuQN4s",
  authDomain: "notes-1c590.firebaseapp.com",
  projectId: "notes-1c590",
  storageBucket: "notes-1c590.firebasestorage.app",
  messagingSenderId: "222909527245",
  appId: "1:222909527245:web:80e4b3a15947e418786584"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export class Firebase{
    static firebase= undefined;
    static auth=undefined;
    static db=undefined;
    static init() {
        this.firebase = initializeApp(firebaseConfig);
        this.auth =getAuth();
        this.db = getFirestore(this.firebaseApp);
      }

    
}