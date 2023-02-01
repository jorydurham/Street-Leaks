import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaRLKecGNYfYR8d-4ImmTIeQGfDrnIWEo",
    authDomain: "street-leaks.firebaseapp.com",
    projectId: "street-leaks",
    storageBucket: "street-leaks.appspot.com",
    messagingSenderId: "1021830866106",
    appId: "1:1021830866106:web:350164f2117a2857d10e83"
  };

  const FirebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
// this allows us to tell firebase when we want to get/set a doc inside our database
  export const createUserDocumentFromAuth = async (userAuth) => {
  const UserDocRef = doc(db, 'users', userAuth.uid);
  console.log(UserDocRef);

  const userSnapshot = await getDoc(UserDocRef);
  console.log(userSnapshot.exists())
  // This can tell us if inside our database if the refrence exists: returns a boolean
}


