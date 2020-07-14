import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDYXv2mqtwEnUDuukw4ZW7hTx1zjQ2dOnY",
	authDomain: "royal-clothing-2ac43.firebaseapp.com",
	databaseURL: "https://royal-clothing-2ac43.firebaseio.com",
	projectId: "royal-clothing-2ac43",
	storageBucket: "royal-clothing-2ac43.appspot.com",
	messagingSenderId: "986099375386",
	appId: "1:986099375386:web:8495a0b8eca8e6f07f20a3",
	measurementId: "G-25DK60YZE4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user ", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
