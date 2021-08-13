import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvG94w-Qds0yXl-sS7BZsZxVa1NBRag3c",
    authDomain: "fire-gram-03.firebaseapp.com",
    projectId: "fire-gram-03",
    storageBucket: "fire-gram-03.appspot.com",
    messagingSenderId: "997303128957",
    appId: "1:997303128957:web:17cd5e458615eabf09f214"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.filestore();

export { projectStorage, projectFirestore };
   