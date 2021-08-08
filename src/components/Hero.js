import React from 'react';
import Style from '../style/Home.module.css';

export default function Hero() {
	return (
		<div className={`${Style.hero} row p-0`}>
			<div className={`${Style.heroContent} col-6`}>
				<div className='animate__animated animate__delay-1s animate__fadeInDown'>
					<h1>Hello,</h1>
					<h1>I am Favour Vivian Woka</h1>
					<p>Front-end Developer / Technical Writer</p>
				</div>
				<button
					className={`${Style.btn} animate__animated animate__delay-2s animate__infinite animate__pulse`}
				>
					Hire Me
				</button>
			</div>
			<div className='col-6'></div>
			<div className={`${Style.imgBg} col-6`}></div>
		</div>
	);
}
