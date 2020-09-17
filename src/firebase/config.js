import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAwjxAoS_m_cvvRL9N_2Ux40Ji50VqCqH4",
    authDomain: "illuminaxx-firegrame.firebaseapp.com",
    databaseURL: "https://illuminaxx-firegrame.firebaseio.com",
    projectId: "illuminaxx-firegrame",
    storageBucket: "illuminaxx-firegrame.appspot.com",
    messagingSenderId: "947701552144",
    appId: "1:947701552144:web:420bc785cd28abb0a9e695"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage =  firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };