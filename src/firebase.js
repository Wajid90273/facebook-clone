import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXFsWRRTWM_k1702Oj-yy39uJBaNvwKkA",
  authDomain: "facebook-clone-2699c.firebaseapp.com",
  projectId: "facebook-clone-2699c",
  storageBucket: "facebook-clone-2699c.appspot.com",
  messagingSenderId: "387473932677",
  appId: "1:387473932677:web:d250e952d98d5fff1244ec",
  measurementId: "G-T8VKL2SR1T"
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// set auth
const auth = firebase.auth();

// set provider
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;