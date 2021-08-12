import React from 'react';
import AllBlog from '../components/AllBlog';
import style from '../style/Blog.module.css';

export default function Blog() {
	return (
		<div className='text-white'>
			<div className='blog-page text-center'>
				<div className='blog-page1'>
					<h2 className={`header`}>Articles</h2>
					<p className='m-0'>
						I write articles about frontend development and tutorials for
						beginners and you can find them below:
					</p>
				</div>
			</div>
			<div className={`${style.container} pb-5 container my-5`}>
				<AllBlog />
			</div>
		</div>
	);
}
