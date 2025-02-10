import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { Firebase } from "../config/firebase-config";
export class AuthApi{
    static  async sign(email,pwrd){
          const response=await  signInWithEmailAndPassword(Firebase.auth,email,pwrd);
          console.log(response)

    }
}