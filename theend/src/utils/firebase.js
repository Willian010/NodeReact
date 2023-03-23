import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCo7mkNTvvwpOD4ntCIVFXGboJtrymVVoo",
    authDomain: "maconstruccion-79df5.firebaseapp.com",
    projectId: "maconstruccion-79df5",
    storageBucket: "maconstruccion-79df5.appspot.com",
    messagingSenderId: "629059488152",
    appId: "1:629059488152:web:669de5c48e5bd8087083ed"
  };
//iniciamos concexcion poryecto React con Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)