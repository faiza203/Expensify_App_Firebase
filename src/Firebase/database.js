import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAZX5VgMVNTyz-J_UUoCFuXIFK48pk7mzU",
    authDomain: "common-50c43.firebaseapp.com",
    databaseURL: "https://common-50c43.firebaseio.com",
    projectId: "common-50c43",
    storageBucket: "common-50c43.appspot.com",
    messagingSenderId: "670911494230",
    appId: "1:670911494230:web:857a94f90ca0755575a3f7",
    measurementId: "G-7S6PJVJD26"
};
firebase.initializeApp(firebaseConfig);
firebase.database().ref().set({
       name : "Faiza Fiaz"
});