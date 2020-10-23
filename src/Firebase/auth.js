import * as firebase from "firebase";
import { Link } from "react-router-dom";
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
export default firebase.initializeApp(firebaseConfig);
export const signUp = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, } = e.target.elements;
    if (password.value !== confirmPassword.value) {
        alert("Password does not macthed")
    } else {
        const promise = firebase.auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(() => {
                alert("Account is successfully created");
                let currentUrl = window.location.href;
                window.location.href = (currentUrl + "/login")
            }
            ).catch((err) => {
                alert(err)
            })
    }
}
export const signIn = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
        const promise = firebase.auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then(() => {
                alert("Successfully Login");
                let currentUrl = window.location.href;
                window.location.href = (currentUrl + "addTodo")
            }
            ).catch((err) => {
                alert(err)
            })
    }

