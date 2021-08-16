import React from 'react';
import firebase from 'firebase';

export const GetData = () => {
	const [documents, setDocuments] = React.useState([]);

	const db = firebase.firestore();
	React.useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				db.collection('values')
					.doc(user.uid)
					.collection('doc')
					.get()
					.then((querySnapshot) => {
						let arr = [];
						querySnapshot.docs.map((doc) =>
							arr.push({ id: doc.id, value: doc.data() })
						);
						setDocuments(arr);
					});
			} else {
				console.log(user + 'logged out');
			}
		});
	});
	return [documents];
};
