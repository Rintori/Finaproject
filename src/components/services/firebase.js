import firebase from 'firebase/app';
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCHm_3rIEJMPzGpRrpmijbsmImQYHGuBGw",
    authDomain: "finalproj-048-057-2aedd.firebaseapp.com",
    projectId: "finalproj-048-057-2aedd",
    storageBucket: "finalproj-048-057-2aedd.appspot.com",
    messagingSenderId: "654019924559",
    appId: "1:654019924559:web:4fa92b1d57e5fc835ad03a",
    measurementId: "G-LKRJWEWE0J"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signIn = async(email, password) => {

return await firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    return user
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage
  });
}
export const signOut = async() => {
  return await firebase.auth().signOut().then(() => {
    return "Success"
  }).catch((error) => {
    return "Fail"
  });
}

export default firebase;