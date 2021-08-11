import React from 'react';
import style from '../style/Blog.module.css';

export default function BlogSection() {
	return (
		<div className={`${style.container}`}>
			<div className='my-5'>
				<h2 className={`${style.header}`}>My Blog</h2>
				<p className='m-0'>
					I write articles about frontend development and tutorials for
					beginners and you can find them below:
				</p>
			</div>
			<div className='row'>
				<div className='col-4 text-left border'>
					<h4>Uploading an Image to Firebase Cloud Storage with Angular</h4>
				</div>
				<div className='col-4 text-left border'>
					<h4>Building a Book Finder App using Google Book API</h4>
				</div>
				<div className='col-4 text-left border'>
					<h4>Build a Google Doc clone with HTML, CSS, and JavaScript</h4>
				</div>
			</div>
		</div>
	);
}
