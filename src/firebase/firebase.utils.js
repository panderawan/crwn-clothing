import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyDrXsvX-DaNPGt5EALNFdoyUFVKdVD1R3Y',

	authDomain: 'crwn-db-fd583.firebaseapp.com',

	projectId: 'crwn-db-fd583',

	storageBucket: 'crwn-db-fd583.appspot.com',

	messagingSenderId: '612514779656',

	appId: '1:612514779656:web:93070e8e9c7624dd9fb7bd'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
