import React from 'react';
import style from '../style/Blog.module.css';
import { BiRightArrowCircle } from 'react-icons/bi';
import AllBlog from './AllBlog';

export default function BlogSection() {
	return (
		<div className={`${style.container} pb-5 container`}>
			<div className='my-5'>
				<h2 className={`header`}>My Blog</h2>
				<p className='m-0'>
					I write articles about frontend development and tutorials for
					beginners and you can find them below:
				</p>
			</div>
			<div>
				<AllBlog />
			</div>
			<div className='text-center'>
				<button
					className={`${style.btn} mt-2 animate__animated animate__delay-2s animate__infinite animate__pulse`}
				>
					<a className='link' href='/Blog'>
						Read More <BiRightArrowCircle size={22} />
					</a>
				</button>
			</div>
		</div>
	);
}
