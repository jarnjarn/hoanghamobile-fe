import { FacebookAuthProvider, GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";
import app from '../common/config/firebase';
const firebaseService = {
   // login with google 
   loginWithGoogle: () => {
	  const provider = new GoogleAuthProvider();
	  return signInWithPopup(getAuth(app),provider);
   },
   // login with facebook
   loginWithFacebook: () => {
	  const provider = new FacebookAuthProvider();
	  return signInWithPopup(getAuth(app),provider);
   },
   // logout
   logout: () => {
	  return getAuth(app).signOut();
   },
   getInfo : () => {
	  return getAuth(app).currentUser;
   },
   // get user token
   getAuth : () => {
	  return getAuth(app);
   },
   // login with email and password
   loginWithEmailAndPassword : (email:string,password:string) => {
	  return signInWithEmailAndPassword(getAuth(app),email,password);
   },
   // register with email and password
   registerWithEmailAndPassword : (email:string,password:string) => {
	  return createUserWithEmailAndPassword(getAuth(app),email,password);
   }
}
export default firebaseService;
