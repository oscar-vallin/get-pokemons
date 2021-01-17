import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCaEL15lolgfJLruLbhH7-jxyUpT3kxoI",
    authDomain: "get-poke.firebaseapp.com",
    projectId: "get-poke",
    storageBucket: "get-poke.appspot.com",
    messagingSenderId: "675918515814",
    appId: "1:675918515814:web:77c9044e56805d930767a7",
    measurementId: "G-7DKWGH9VXW"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore().collection('favs');

export const getFavsPoke = async uid => {

  const getDoc = await db.doc(uid).get();
    const getPokemos = await getDoc.data().pokemons

    return getPokemos;
}

export const updateDB = async (pokemon, uid) =>  await  db.doc(uid).set({pokemons:[ ...pokemon]});


export const signGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
            .then(snap => snap.user);
};

export const outLogGooge = () => firebase.auth().signOut();