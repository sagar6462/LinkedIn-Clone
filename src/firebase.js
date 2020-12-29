import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCkYJkjcrskRc10hxF9nzj6FWM9fulSHg0",
	authDomain: "linkedin-clone-73a8c.firebaseapp.com",
	projectId: "linkedin-clone-73a8c",
	storageBucket: "linkedin-clone-73a8c.appspot.com",
	messagingSenderId: "372102082570",
	appId: "1:372102082570:web:3be5c5e87d2e00c1e7eff3",
	measurementId: "G-J9XJB3Y515",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
