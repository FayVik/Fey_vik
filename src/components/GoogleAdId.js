import React from 'react';
import firebase from '../firebase';

export default function GoogleAdId() {
	const [value, setValue] = React.useState('');
	const db = firebase.firestore();
	const getValue = (event) => {
		setValue(event.target.value);
	};
	const addValue = () => {
		const bt = db
			.collection('values')
			.doc(value)
			.set({ value: value })
			.then((res) => {
				console.log('Value successfully written!', res);
			})
			.catch(function (error) {
				console.error('Error writing Value: ', error);
			});
		console.log(bt);
	};
	return (
		<div>
			<input onBlur={getValue} type='text' />
			<button type='button' onClick={addValue}>
				Add
			</button>
		</div>
	);
}
