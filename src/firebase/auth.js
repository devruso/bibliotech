import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  GithubAuthProvider,
  sendEmailVerification

} from "firebase/auth";
import { auth } from "./config";
import { and } from "firebase/firestore";
import { usersCollection } from "./collections";
import {doc, getDoc, setDoc} from "firebase/firestore"

async function cadastrarUsuarioDb(data){
  const userDoc = await getDoc(doc(usersCollection, data.user.uid))

  if(!userDoc.exists()){
    const newUserRef = doc(usersCollection, data.user.uid)
    await setDoc(newUserRef, {
      nome: data.user.displayName,
      email: data.user.email,
      dataCadastro: new Date()
    });
  }
}

// Função assíncrona = que o resultado não é obtido de imediato
// Haverá "espera"
export async function cadastrarEmailSenha(email, senha) {
  // Indicar para o firebase que queremos cadastrar
  // um novo usuário utilizando email/senha

  // Aguardando o resultado do Firebase
  const data = await createUserWithEmailAndPassword(auth, email, senha);
  cadastrarUsuarioDb(data);

  return data.user;
}

export async function loginGoogle() {
  // Configurar como o login do google vai funcionar
  const provider = new GoogleAuthProvider();
  const resultado = await signInWithPopup(auth, provider);
  cadastrarUsuarioDb(resultado);

  return resultado.user;
}

export async function loginFacebook() {
  const provider = new FacebookAuthProvider();
  const autenticacao = await signInWithPopup(auth, provider);
  cadastrarUsuarioDb(autenticacao);

  return autenticacao.user


}

export async function loginGithub() {
  const provider = new GithubAuthProvider();
  const autenticacao = await signInWithPopup(auth, provider);
  cadastrarUsuarioDb(autenticacao);

  return autenticacao.user


}

export async function loginEmailSenha(email, senha) {
  // Vai realizar o login com uma conta de email já existente
  const resultado = await signInWithEmailAndPassword(auth, email, senha);

  if (resultado.user.emailVerified === false) {
    emailVerif(resultado.user)
  }
  return resultado.user
}

export async function logout() {
  // Deslogar o usuário atual do firebase
  await signOut(auth);
}

export async function emailVerif(user) {
  await sendEmailVerification(user);
}
