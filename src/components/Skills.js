import React from 'react';
import Style from '../style/Skills.module.css';
import { Progress, Progress2, Progress3, Progress4 } from './Progress';

export default function Skills() {
	return (
		<div className={Style.skills}>
			<div className='my-5'>
				<h2 className={Style.header}>My Skills</h2>
				<p className='my-2 text-center'>
					Here are all my Skills that I have aquired.
				</p>
			</div>
			<div className='row m-0 justify-center px-2'>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<div className={`${Style.progress} ${Style.blue}`}>
						<Progress>90% Html</Progress>
					</div>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<Progress>90% Css</Progress>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<Progress>90% Bootstrap</Progress>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<Progress2>70% Tailwind</Progress2>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<Progress3>60% JavaScript</Progress3>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<Progress3>60% Angular.js</Progress3>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<Progress4>50% Vue.js</Progress4>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-3`}>
					<Progress3>60% React.js</Progress3>
				</div>
			</div>
		</div>
	);
}
