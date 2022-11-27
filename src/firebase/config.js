import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCuyODuCrioYAzz-6WLx2EFGILxFluBc2M",
    authDomain: "myfinance-tracker.firebaseapp.com",
    projectId: "myfinance-tracker",
    storageBucket: "myfinance-tracker.appspot.com",
    messagingSenderId: "657375126510",
    appId: "1:657375126510:web:9d605d4d978359935a24ff"
};

//  init firebase
firebase.initializeApp(firebaseConfig)

// init service
const db = firebase.firestore()
const auth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp


export { db, auth, timestamp }