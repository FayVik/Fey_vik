import firebase from 'firebase';

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_KEY_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_KEY_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_KEY_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_KEY_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_KEY_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_KEY_MEASURMENT_ID,
};

firebase.initializeApp(config);
export default firebase;
