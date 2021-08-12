import React from 'react';
import img from '../image/vik-removebg-preview 18.27.22.png';

export default function About() {
	return (
		<div className='about'>
			<div className='navs'></div>
			<div className='row m-0 about-2'>
				<div className='col-lg-7 col-md-7 col-sm-12'>
					<p>
						I'm a Front End Developer based in Port Harcourt, Nigeria. I am
						passionate about building applications that run on the web.
					</p>
					<p>
						Technical writing is another interest of mine. When I am not doing
						software-related activities, you will find me practicing a new dance
						step (basically I dance for fun).
					</p>
					<p>
						Formally, I worked with a company called PrimedSoft and I was
						responsible for building user interfaces and implementing APIs.
					</p>
					<p>
						I currently work at
						<a className='mx-2' href='https://codesource.io/author/favour/'>
							codesource.io
						</a>
						and
						<a
							className='mx-2'
							href='https://blog.logrocket.com/author/favourvivianwoka/'
						>
							blog.logrocket.com
						</a>
						as a technical writer and you can check out some of my articles.
					</p>
					<p>Want to know more? drop me a line: vivianemma97@gmail.com</p>
				</div>
				<div className='col-lg-5 col-md-5 col-sm-12 text-center '>
					<div className='bg-image rounded'>
						<img src={img} alt='me' width='150px' />
					</div>
				</div>
			</div>
		</div>
	);
}
