import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config"
import { getDocs } from "firebase/firestore";
import { usersCollection } from "./collections";


const auth = getAuth();

export async function updateUser(data) {
    await updateEmail(auth.currentUser, data.email)
    await updateProfile(auth.currentUser, { displayName: data.displayName })
    await updatePassword(auth.currentUser, data.senha)
}

export async function addPhoto(imagem) {
    const filename = imagem.name;
    const imageRef = ref(storage, `users/${filename}`);
    const result = await uploadBytes(imageRef, imagem);
    return await getDownloadURL(result.ref);
}

export async function addFoto(url) {
    await updateProfile(auth.currentUser, {photoURL: url})
}

export async function getUsers() {
    const snapshot = await getDocs(usersCollection);
    let users = [];
    snapshot.forEach(doc => {
        users.push({...doc.data(), id: doc.id});
    })
    return users;
}