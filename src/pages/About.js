import React from 'react';
import style from '../style/About.module.css';
import AboutImages from '../components/AboutImages';
import img from '../image/DSC_3058.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function About() {
	return (
		<div className=''>
			<div className={`${style.about}`}>
				<div className={`${style.navs}`}></div>
				<h1 className={`header my-4`}>A bit about Me</h1>
				<div className={`${style.imgePill} mb-4`}>
					<LazyLoadImage
						src={img}
						alt='me'
						className={`${style.img} rounded-circle`}
					/>
				</div>
				<div className={`${style.about2} row m-0`}>
					<div className='col-lg-12 col-md-12 col-sm-12 text-center'>
						<p className='p-0'>
							I'm a Front End Developer based in Port Harcourt, Nigeria. I am
							passionate about building applications that run on the web.
						</p>
						<p className='p-0'>
							Technical writing is another interest of mine. When I am not doing
							software-related activities, you will find me practicing a new
							dance step (basically I dance for fun).
						</p>
						<p className='p-0'>
							Formally, I worked with a company called PrimedSoft and I was
							responsible for building user interfaces and implementing APIs.
						</p>
						<p className='p-0'>
							I currently work at
							<a
								className='mx-2 link'
								href='https://codesource.io/author/favour/'
							>
								codesource.io
							</a>
							and
							<a
								className='mx-2 link'
								href='https://blog.logrocket.com/author/favourvivianwoka/'
							>
								blog.logrocket.com
							</a>
							as a technical writer and you can check out some of my articles.
						</p>
						<p className='p-0'>
							Want to know more? drop me a line: vivianemma97@gmail.com
						</p>
					</div>
				</div>
			</div>
			<div className='m-0'>
				<AboutImages />
			</div>
		</div>
	);
}
