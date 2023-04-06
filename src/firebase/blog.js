import { addDoc, getDocs } from "firebase/firestore";
import { blogCollection } from "./collections";

export async function enviarPostagem(data){
    await addDoc(blogCollection, data);
}

export async function getPostagens() {
    const snapshot = await getDocs(blogCollection);
    let postagens = [];
    snapshot.forEach(doc => {
        postagens.push({...doc.data(), id: doc.id});
    })
    return postagens;
}

