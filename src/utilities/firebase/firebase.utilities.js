import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
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
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
  // This is specific for google, there other other providers, EX: facebookAuthProvider

  export const db = getFirestore();
// this allows us to tell firebase when we want to get/set a doc inside our database
  export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
  const UserDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(UserDocRef);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(UserDocRef, {
        displayName, 
        email, 
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return UserDocRef;
  // This can tell us if inside our database if the refrence exists: returns a boolean

  // First check if user data exists-

  // Return userDocRef

  // if not -

  // Create/setDoc with data
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;


  return await createUserWithEmailAndPassword(auth, email, password);
};