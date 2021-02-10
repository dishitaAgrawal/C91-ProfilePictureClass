import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBYfQVXjmTnv1qS8UZZFCpPk_ncqarG5DI",
  authDomain: "book-santa-1.firebaseapp.com",
  projectId: "book-santa-1",
  storageBucket: "book-santa-1.appspot.com",
  messagingSenderId: "18216195003",
  appId: "1:18216195003:web:42e3aa47a737d08cff6a9e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
