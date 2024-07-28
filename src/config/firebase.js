// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {productos} from "../data/asynMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ06pESfHhOg7wFgc9N_Rys3icNdIcqFw",
    authDomain: "laboratorio-teva.firebaseapp.com",
    projectId: "laboratorio-teva",
    storageBucket: "laboratorio-teva.appspot.com",
    messagingSenderId: "1010167353105",
    appId: "1:1010167353105:web:839fde6377f6f2bb9086b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

if (getFirestore(app).empty) {
    productos.forEach((prod) => {
        addDoc(collection(db, "productos"), prod)
        .then((data) => console.log(`El producto ${data.id} se subió correctamente`))
        .catch((error) => console.log(error));
    });
} else {
    console.log("La colección ya contiene productos.");
}
