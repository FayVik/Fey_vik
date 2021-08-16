import React from 'react';
import firebase from '../firebase';
export default function GoogleAdId() {
	function authenticateWithGoogle() {
		// eslint-disable-next-line no-undef
		const provider = new firebase.auth.GoogleAuthProvider();
		// eslint-disable-next-line no-undef
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				window.location.href = '/ShowAllDoc';
			})
			.catch(function (error) {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential = error.credential;
				console.log(errorCode, errorMessage, email, credential);
			});
	}

	return (
		<div className='row'>
			<div className='google col-6 text-center'>
				<button
					className='btn-google btn-danger btn mb-2 '
					onClick={authenticateWithGoogle}
				>
					<img src='image/Google.png' width='24' alt='' />
					<span>Login with Google</span>
				</button>
			</div>
		</div>
	);
}
