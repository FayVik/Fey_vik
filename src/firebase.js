import firebase from 'firebase';

const config = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PID,
	storageBucket: process.env.BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_KEY_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_KEY_APP_ID,
	measurementId: process.env.MSGID,
};

firebase.initializeApp(config);
export default firebase;
