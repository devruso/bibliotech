import { addDoc } from "firebase/firestore";
import { mensagensCollection } from "./collections";

export async function enviarMensagem(data){
    await addDoc(mensagensCollection, data);
}