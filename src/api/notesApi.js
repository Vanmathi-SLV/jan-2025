import { Firebase } from "../config/firebase-config";
import { getDocs, query, collection } from "firebase/firestore";
export class NotesApi{
    static async getData(){
        const q =  await query(
            collection(Firebase.db, "Notes"),
          );
       const response= await getDocs(q);
       console.log(response);
       return response.docs
      .map((document) => {
        return {
          id: document.id,
          ...document.data(),
        };
      })

      
    }
}