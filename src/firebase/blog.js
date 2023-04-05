import { addDoc } from "firebase/firestore";
import { blogCollection } from "./collections";

export async function enviarPostagem(data){
    await addDoc(blogCollection, data);
}