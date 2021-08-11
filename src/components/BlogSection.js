import React from 'react';
import style from '../style/Blog.module.css';

export default function BlogSection() {
	return (
		<div className={`${style.container}`}>
			<div className='my-5'>
				<h2 className={`${style.header}`}>My Blog</h2>
				<p className='m-0'>
					I write articles about frontend development and tutorials for
					beginners
				</p>
				<p className='m-0'>See some of my latest articles:</p>
			</div>
		</div>
	);
}
