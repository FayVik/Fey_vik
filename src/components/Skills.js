import React from 'react';
import Style from '../style/Skills.module.css';

export default function Skills() {
	return (
		<div className={Style.skills}>
			<div className='my-5'>
				<h2 className={Style.header}>My Skills</h2>
				<p className='my-2'>
					Here are some of my recent projects that i worked on
				</p>
			</div>
		</div>
	);
}
