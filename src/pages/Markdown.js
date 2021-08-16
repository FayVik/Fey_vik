import React, { Component } from 'react';
import marked from 'marked';
import { sampleText } from '../SampleText';
import firebase from '../firebase';

class Markdown extends Component {
	state = {
		text: sampleText,
	};

	componentDidMount() {
		const text = localStorage.getItem('text');
		if (text) {
			this.setState({ text });
		} else {
			this.setState({ text: sampleText });
		}
	}

	componentDidUpdate() {
		const { text } = this.state;
		localStorage.setItem('text', text);
	}

	handleChange = (event) => {
		const text = event.target.value;
		this.setState({ text });
	};

	renderText = (text) => {
		const __html = marked(text);
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				const token = localStorage.getItem('token');
				if (!token) {
					// eslint-disable-next-line no-undef
					const docId = firebase
						.firestore()
						.collection('docs')
						.doc(user.id)
						.collection('documents')
						.doc().id;
					console.log(token);
					localStorage.setItem('token', docId);
				} else {
					firebase
						.firestore()
						.collection('docs')
						.doc(user.uid)
						.collection('documents')
						.doc(token)
						.get()
						.then((doc) => {
							if (doc.exists) {
								console.log(doc.data().content);
							} else {
								console.log('No such document!');
							}
						})
						.catch(function (error) {
							console.log('Error getting document:', error);
						});
				}
				firebase
					.firestore()
					.collection('values')
					.doc(user.uid)
					.collection('doc')
					.doc(token)
					.set({
						__html,
						createdAt: new Date(),
						updated: new Date(),
					})
					.then(() => {})
					.catch(function (error) {
						console.error('Error writing Value: ', error);
					});
			} else {
				console.log(user + 'logged out');
			}
		});

		return { __html };
	};

	render() {
		return (
			<div className='container-fluid mt-5 pt-5'>
				<div className='row'>
					<div className='col-sm-6'>
						<textarea
							onChange={this.handleChange}
							value={this.state.text}
							className='form-control'
							rows='25'
						/>
					</div>
					<div className='col-sm-6'>
						<div
							className='dark-mode'
							dangerouslySetInnerHTML={this.renderText(this.state.text)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Markdown;
