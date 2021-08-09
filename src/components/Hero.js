import React from 'react';
import Style from '../style/Home.module.css';
import img from '../image/undraw_working_remotely_jh40.svg';

export default function Hero() {
	return (
		<div className={`${Style.hero} row p-0`}>
			<div className={`${Style.heroContent} col-7`}>
				<div className='animate__animated animate__delay-1s animate__fadeInDown'>
					<h1 className={`${Style.header}`}>Hello,</h1>
					<h1>I am Favour Vivian Woka</h1>
					<p className={`${Style.text} my-4`}>
						Front-end Developer / Technical Writer
					</p>
				</div>
				<button
					className={`${Style.btn} mt-2 animate__animated animate__delay-2s animate__infinite animate__pulse`}
				>
					Hire Me
				</button>
			</div>
			<div className='col-6'></div>
			<div className={`${Style.imgBg} col-5`}>
				<img src={img} alt='Vick' className={Style.img} />
			</div>
		</div>
	);
}
