import firebase from 'firebase';

try {



    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBKKPfMbeOE27O5eri6SSZjDvfXkod85us",
        authDomain: "mead-todo-app-4a74f.firebaseapp.com",
        databaseURL: "https://mead-todo-app-4a74f.firebaseio.com",
        projectId: "mead-todo-app-4a74f",
        storageBucket: "mead-todo-app-4a74f.appspot.com",
        messagingSenderId: "283668995048"
    };


    firebase.initializeApp(config);

} catch (e) {

}



export var firebaseRef = firebase.database().ref();


export default firebase;