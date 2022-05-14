import {initializeApp} from 'firebase/app'
import {
    getAuth ,
    signInWithRedirect , 
    signInWithPopup , 
    GoogleAuthProvider
    } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8_Uj8Vmx1HO2HCj7WT_bvnKsQL7THElY",
    authDomain: "e-commerce-first-project.firebaseapp.com",
    projectId: "e-commerce-first-project",
    storageBucket: "e-commerce-first-project.appspot.com",
    messagingSenderId: "100230812805",
    appId: "1:100230812805:web:ecf723f1c7c981e21085ec"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt:'select_account'
  });

  export const auth = getAuth();
  export const sighInWithGooglePopup = () => signInWithPopup(auth , provider);